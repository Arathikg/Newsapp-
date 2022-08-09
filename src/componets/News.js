import React, { Component } from "react";
import NewsItem from "./NewsItem";
import Spinner from "./Spinner";

export class News extends Component {
  articles = [
    {
      source: { id: "cnn", name: "CNN" },
      author: "Tierney Sneed and Ariane de Vogue, CNN",
      title:
        "Supreme Court schedules January 7 oral arguments in challenges to Biden vaccine mandates - CNN",
      description:
        "The Supreme Court said Wednesday it is scheduling oral arguments for January 7 in the cases challenging the Biden administration's Covid-19 vaccine requirements for large employers and certain health care workers.",
      url: "https://www.cnn.com/2021/12/22/politics/biden-vaccine-mandate-oral-arguments-supreme-court/index.html",
      urlToImage:
        "https://cdn.cnn.com/cnnnext/dam/assets/200921134058-01-supreme-court-file-super-tease.jpg",
      publishedAt: "2021-12-23T04:35:00Z",
      content:
        "(CNN)The Supreme Court said Wednesday it is scheduling oral arguments for January 7 in the cases challenging the Biden administration's Covid-19 vaccine requirements for large employers and certain h… [+4715 chars]",
    },
    {
      source: { id: "reuters", name: "Reuters" },
      author: null,
      title:
        "Hong Kong university dismantles and removes Tiananmen statue - Reuters",
      description:
        "A leading Hong Kong university has dismantled and removed a statue from its campus site that for more than two decades has commemorated pro-democracy protesters killed during China's Tiananmen Square crackdown in 1989.",
      url: "https://www.reuters.com/world/asia-pacific/hong-kong-university-fences-off-tiananmen-statue-campus-2021-12-22/",
      urlToImage:
        "https://www.reuters.com/resizer/iXAHc9AiCU4mkWHXIz-81VYFGzw=/1200x628/smart/filters:quality(80)/cloudfront-us-east-2.images.arcpublishing.com/reuters/K4RHEB52URMIVFL6G322YWBFBA.jpg",
      publishedAt: "2021-12-23T04:17:00Z",
      content:
        "HONG KONG, Dec 23 (Reuters) - A leading Hong Kong university has dismantled and removed a statue from its campus site that for more than two decades has commemorated pro-democracy protesters killed d… [+4671 chars]",
    },
    {
      source: { id: null, name: "Deseret News" },
      author: "Herb Scribner",
      title:
        "Omicron variant symptoms: 4 common symptoms you might have missed - Deseret News",
      description:
        "The omicron variant could lead to four new COVID symptoms that you might have missed. Read about the new omicron variant symptoms.",
      url: "https://www.deseret.com/coronavirus/2021/12/22/22846786/omicron-variant-symptoms-common-signs-side-effects",
      urlToImage:
        "https://cdn.vox-cdn.com/thumbor/lkc4g-w6BwGPkxS85Rqc9waczjw=/0x215:3000x1786/fit-in/1200x630/cdn.vox-cdn.com/uploads/chorus_asset/file/23103825/COVID_Herb_Series_1_2.jpg",
      publishedAt: "2021-12-23T03:30:00Z",
      content:
        "Theres still a lot to learn about the omicron variant of the coronavirus, which continues to spread throughout the world, including the United States. But some more information about potential sympto… [+1615 chars]",
    },
    {
      source: { id: null, name: "msnNOW" },
      author: null,
      title:
        "China says celebrities have 10 days to cough up unpaid taxes - msnNOW",
      description: null,
      url: "https://www.msn.com/en-us/news/world/china-says-celebrities-have-10-days-to-cough-up-unpaid-taxes/ar-AAS4Fbb",
      urlToImage: null,
      publishedAt: "2021-12-23T03:08:18Z",
      content: null,
    },
    {
      source: { id: null, name: "CNBC" },
      author: "Evelyn Cheng",
      title: "Major Chinese city locks down to control Covid outbreak - CNBC",
      description:
        "The outbreak in Xi'an city — population 13 million — stems from the delta variant, authorities said.",
      url: "https://www.cnbc.com/2021/12/23/major-chinese-city-locks-down-to-control-covid-outbreak.html",
      urlToImage:
        "https://image.cnbcfm.com/api/v1/image/106993044-1640217919793-gettyimages-1359638454-vcg111362133739.jpeg?v=1640217989",
      publishedAt: "2021-12-23T02:53:00Z",
      content:
        "Students queue up for COVID-19 nucleic acid testing at Xi'an Jiaotong University on December 17, 2021 in Xi an, Shaanxi Province of China.\r\nBEIJING A major city in central China that's seen a flare-u… [+3634 chars]",
    },
    {
      source: { id: "cnn", name: "CNN" },
      author: "Jamie Gumbrecht and Amanda Sealy, CNN",
      title: "FDA authorizes first pill to treat Covid-19 - CNN",
      description:
        "The US Food and Drug Administration on Wednesday authorized Pfizer's antiviral pill, Paxlovid, to treat Covid-19.",
      url: "https://www.cnn.com/2021/12/22/health/pfizer-antiviral-pill-authorized/index.html",
      urlToImage:
        "https://cdn.cnn.com/cnnnext/dam/assets/211116141602-01-pfizer-antiviral-pill-eua-request-super-tease.jpg",
      publishedAt: "2021-12-23T02:32:00Z",
      content: null,
    },
    {
      source: { id: null, name: "NPR" },
      author: "Alana Wise",
      title:
        "Biden teases possible rematch against Donald Trump. 'Why would I not?' - NPR",
      description:
        "In an interview with ABC News on Wednesday, the president discussed his political future and what his administration would do to fight the spike in coronavirus cases.",
      url: "https://www.npr.org/2021/12/22/1067138785/biden-teases-possible-rematch-against-donald-trump-why-would-i-not",
      urlToImage:
        "https://media.npr.org/assets/img/2021/12/22/ap_21356594854960_wide-63fa0253065eff60d821712df4ca4f54f079f878.jpg?s=1400",
      publishedAt: "2021-12-23T02:15:15Z",
      content:
        "President Joe Biden speaks Wednesday during a meeting with his task force on supply chain issues.\r\nPatrick Semansky/AP\r\nPresident Biden on Wednesday said he planned to run again for the presidency in… [+2773 chars]",
    }
    
  ];
  // article is a variable and u can access it using this.article
  constructor() {
    super();
    console.log("hello iam a constructor");
    /*so jitne objects utno ke liye yeah constructor func run hoga so this is like a blue print 
    so u can imagine this as a basic template and it renders the neechay wala part  but how the flow goes i m not really
sure about that 
props can nvr b changed , but props pass karke u can change the state and thn change the state but cant change prop



*/
    this.state = {
      articles: this.articles,
      loading: false
    }
  }
  async componentDidMount(){
let url="https://newsapi.org/v2/top-headlines?country=us&apiKey=163072a67eb648cb9ebff9e1133b71d9";
let data= await fetch(url);
let parsedData= await data.json();
console.log(parsedData);
this.setState({articles:parsedData.articles,totalResults:parsedData.totalResults});



   //is a lifecycle method 
   //will run after render run hoga first constructor fir render fir cdm 
 }
 
 handleprevclick=async()=>{
  let url=`https://newsapi.org/v2/top-headlines?country=us&apiKey=163072a67eb648cb9ebff9e1133b71d9&page=${this.state.page-1}&pagesize=20`;
  let data= await fetch(url);
  let parsedData= await data.json();
  console.log(parsedData);
  this.setState({page:this.state.page-1,
    articles:parsedData.articles});
 }
 handlenextclick=async()=>{
   if(this.state.page+1>Math.ceil(this.state.totalResults/20)){

   }
   else{
  let url=`https://newsapi.org/v2/top-headlines?country=us&apiKey=163072a67eb648cb9ebff9e1133b71d9&page=${this.state.page+1}&pagesize=20`;
  let data= await fetch(url);
  let parsedData= await data.json();
  console.log(parsedData);
  this.setState({page:this.state.page+1,
    articles:parsedData.articles});
 }
}
  render() {
    return (

        <div className="container my-3">
          <h2>NEWS TODAY</h2>
          <h4>
            <Spinner/>
           
          </h4>
          <div className="row">
            {this.state.articles.map((element) => {
              return <div className="col-md-4" key={element.url}>
              
                <NewsItem
                  title={element.title}
                  description={element.description}
                  imageUrl={element.urlToImage}
                  newsUrl={element.url} />
              </div>;
            })}
<div class=" container d-flex justify-content-between">     
      <button disabled={this.state.page<=1} type="button" class="btn btn-dark"  onClick={this.handleprevclick}>
       &larr; PREVIOUS
      </button>
      <button type="button" class="btn btn-dark" onClick={this.handlenextclick}>
         NEXT &rarr;
      </button>
    </div></div>

           
          </div>
        
    );
  }
}

export default News;

