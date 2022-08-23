import {Component, ElementRef, Input, OnInit , ViewChild} from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {ViewsService} from '../../../services/views.service';
import { jsPDF } from "jspdf";
import html2canvas from 'html2canvas';
import { AsyncScheduler } from 'rxjs/internal/scheduler/AsyncScheduler';
import * as ApexCharts from 'apexcharts';

const doc = new jsPDF();

@Component({
  selector: 'app-details',
  templateUrl: './details.component.html'
})

export class DetailsComponent implements OnInit{
  @ViewChild('radar',{static:true})radar!:ElementRef<HTMLImageElement>
  @ViewChild('monthly',{static:true})monthly!:ElementRef<HTMLImageElement>
  displayMode = 'list';
  @Input() polarTitle = 'Analyzers';
  domain: any;
  domainInfo: any;
  certificateStatus: any;
  subdomainsInfo: any;
  ips = [];
  emails = [];
  subdomainsLoaded = false;
  similarDomainsInfo: any;


  constructor(private route: ActivatedRoute, private viewsService: ViewsService) { }
  ngOnInit(): any {
    this.domain = this.route.snapshot.paramMap.get('domain');
    // Subdomains
    this.viewsService.getData('subdomains').subscribe(res => {
      for (const dom of Object.entries(res.subdomains)) {
        if (dom[0] === this.domain) {
          this.subdomainsInfo = dom[1];
          this.subdomainsLoaded = true;
        }
      }
    });
    this.viewsService.getData('certificates').subscribe(res => {
      for (const dom of Object.entries(res.ssl)) {
        if (dom[0] === this.domain) {
          for (const x of Object.entries(dom[1])) {
            if (x[1].cert_valid){
              this.certificateStatus = 'Valid';
            }else{
              this.certificateStatus = 'Invalid';
            }
            // this.certificatesInfo = x[1];
          }
        }
      }
    });
    this.viewsService.getData('servers_blacklists').subscribe(res => {
      if (res != null) {
        // console.log(res.spam_reports);
        for (const x of Object.entries(res.spam_reports)){
          if (this.validateIP(x[0])){
            this.ips.push(x[0]);
          }
          if (this.validateEmail(x[0])){
            this.emails.push(x[0]);
          }
        }
        // console.log(this.ips);
      }
    });
  }
  validateIP(ip): boolean{
    if (/^(25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.(25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.(25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.(25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)$/.test(ip)) {
      return true;
    }
    return false;
  }
  validateEmail(email): boolean {
    const re = /\S+@\S+\.\S+/;
    return re.test(email);
  }

async GeneratePDF(){
    console.log("Generando PDF");
    //First Page
      //--Title
    doc.rect(20, 20, 170, 50)
    doc.text("Cibersecurity Risk Exposure Overview Report", 45, 45);
      //-Images complementary
      var img1 = new Image();
      img1.src ="assets/img/pdf/img1.png";
      var img2 = new Image();
      img2.src ="assets/img/pdf/img2.png";

    doc.addImage(img1 ,'PNG',20, 80, 120, 80);
    doc.addImage(img2 ,'PNG',20, 160, 120, 30);
    doc.setFillColor(26, 58, 105);
    doc.rect(145 , 80 , 45 ,110 , 'FD');

    //Footer
    doc.setFontSize(11);
    doc.text("Date Created:" , 30 , 220);
    var fecha = new Date();
    doc.text(""+fecha.getDate()+"-"+(fecha.getMonth()+1)+"-"+fecha.getFullYear(), 30 , 225);
    
    doc.setLineWidth(0.5)
    doc.line(65, 210, 65, 240)

    doc.text("Owlx Data Intelligence S.L", 75 , 220);
    doc.text("www.owlx.es" , 75 ,225 );

    doc.line(135, 210, 135, 240)

    var img3 = new Image();
    img3.src="assets/img/pdf/img3.png";
    doc.addImage(img3 ,'PNG',155, 210, 30, 30);


  //SECOND PAGE 
    doc.addPage();
    //Header
    doc.addImage(img3 ,'PNG',20, 15, 10, 10);
    doc.text("Owlx- Cibersecurity Risk Exposure Overview Report" ,40 , 20);
    doc.text(""+fecha.getDate()+"-"+(fecha.getMonth()+1)+"-"+fecha.getFullYear(), 170, 20);
    doc.setLineWidth(0);
    doc.line(20, 25, 190, 25)

    //Executive Summary
    doc.setFontSize(16);
    doc.setTextColor(26, 58, 105);
    doc.text("Executive Summary", 20 , 40);
    doc.setTextColor(0, 0, 0);

    //Security rating
    doc.rect(20 , 45 , 65 , 5);
    doc.setFontSize(11);
    doc.text("Owlx Security Rating" , 22 , 49);
    doc.rect(20 , 50,32.5 ,5);
    doc.setTextColor(255 , 213 ,0);
    doc.text("5,3", 30 , 54);

    doc.setFillColor(255, 213, 0);
    doc.rect(52.5 , 50 , 32.5, 5 , "FD");
    doc.setTextColor(0 , 0 ,0);
    doc.text("NOT SAFE" , 53.5 , 56.5);   
  

    //Attack propability
    doc.rect(20 , 65 ,32.5,10);
    doc.setTextColor(255 , 213 ,0);
    doc.text("64%" ,30 ,72);
    doc.rect(52.5 , 65 ,32.5,10);
    doc.setTextColor(0 , 0 ,0);
    doc.setFontSize(11);
    doc.text("Attack Probability", 53.5 ,72);

    //Industry Average
    doc.rect(20 , 85 ,65,5);
    doc.text("Industry Average" , 21 , 89);
    doc.rect(20 , 90,32.5 ,10);
    doc.setTextColor(255 , 213 ,0);
    doc.setFontSize(16);
    doc.text("7,2" , 28 ,97);
    doc.rect(52.5 , 90 , 32.5, 10);
    doc.setTextColor(0,0,0);
    doc.setFontSize(9);
    doc.text("SOMEWHAT SAFE" , 53.5 , 97);

    //Company Information
    doc.rect(105, 45,85,5);
    doc.setFontSize(11);
    doc.text("Company Information" , 106 , 49);

    doc.rect(105, 50,42.5,10);
    doc.text("Homepage: " , 106, 57);
    doc.rect(147.5, 50,42.5,10);
    doc.text(this.domain , 148.5 ,57);

    doc.rect(105, 60,42.5,10);
    doc.text("Industry: " , 106, 67);
    doc.rect(147.5, 60,42.5,10);
    doc.text("a pelo.." , 148.5 ,67);

    doc.rect(105, 70,42.5,10);
    doc.text("IP's analyzed: " , 106, 77);
    doc.rect(147.5, 70,42.5,10);
    doc.text(this.ips.length+"" , 148.5 ,77);

    doc.rect(105, 80,42.5,10);
    doc.text("Domains analyzed: " , 106, 87);
    doc.rect(147.5, 80,42.5,10);
    doc.text(this.subdomainsInfo.length+"" , 148.5 ,87);

    doc.rect(105, 90,42.5,10);
    doc.text("Emails: " , 106, 97);
    doc.rect(147.5, 90,42.5,10);
    doc.text(this.emails.length+"" , 148.5 ,97);

    //Security Area And Monthly Evolution of Security Ranking
    doc.rect(20, 110 , 85 ,5);
    doc.text("Security rating by area",21 ,114);
    doc.rect(20 , 110 ,85 , 85)

    doc.rect(105, 110 , 85 ,5);
    doc.text("Monthly Evolution of Security Rating" , 106 , 114);
    doc.rect(105 , 110 ,85 , 85)

    html2canvas(this.radar.nativeElement).then((canvas) => {
      const imgData = canvas.toDataURL("image/jpeg")
      doc.addImage(imgData , 22 , 116 , 80 ,75);

      html2canvas(this.monthly.nativeElement).then((canvas)=>{
        const imgData = canvas.toDataURL("image/jpeg")
        doc.addImage(imgData , 107 , 116 , 80 ,75);

        ///OWLX SECURITY RATING



        doc.save("a4.pdf");
      })


    })

   
    

 
  //THIRD PAGE

   
    


  }

  getBase64Image(){
    return new Promise((resolve , reject)=>{
      const img = new Image();
      const svgElement:SVGGraphicsElement = document.querySelector("#radar");
      const imageBlobURL = 'data:image/svg+xml;charset=utf-8,' +
            encodeURIComponent(svgElement.outerHTML);
            img.onload = ()=> {
              var canvas = document.createElement('canvas');
              canvas.width = img.width;
              canvas.height = img.height;
              const ctx = canvas.getContext('2d');
              ctx.drawImage(img, 0, 0);
              const dataURL = canvas.toDataURL('image/png');
              resolve(dataURL);
           };
           img.onerror = (error) => {
            reject(error);
          };
          img.src = imageBlobURL;
    });
  }

}
