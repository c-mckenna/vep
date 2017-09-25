import React from "react";
import IacNews from "./partials/iacnews";
import TopLink from "./partials/topLink";
import Loading from "./partials/loading";
import Error from "./partials/error";
import axios from "axios";
import {HashLink as Link} from "react-router-hash-link";

export default class IAC extends React.Component {

  constructor(props) {
    super(props);
    this.focus = this.focus.bind(this);
    this.state = {
      loading: true,
      error : false,
      data: [],
      firstData: [],
      iacImageUrl: "",
      iacImageAlt: ""
    };
  }

  focus() {
    this.refs.iacMembership.focus();
  }

  componentWillMount() {

    //get the current url for the zuul request
    const URL = location.protocol + "//" + location.hostname + ":8999/" ;
    axios.get(URL + "iac-biographies").then((response) => {
      //length of druapl response.
      const l = response.data.length;
      const bio = [];
      const firstBio = [];

      // loop through the first two bios to get the first row of data
      for (let j = 0; j < 2; j++) {
        firstBio.push({
          imageurl: response.data[j].image.src,
          imagealt: response.data[j].image.alt,
          name: response.data[j].name,
          company: response.data[j].company,
          role: response.data[j].role,
          id: response.data[j].id
        });
      }

      // loop through the rest of the bios
      for (let i = 2; i < l; i++) {

        bio.push({
          imageurl: response.data[i].image.src,
          imagealt: response.data[i].image.alt,
          name: response.data[i].name,
          company: response.data[i].company,
          role: response.data[i].role,
          id: response.data[i].id
        });
      }

      // data loaded, push the data to the arrays use in the content.
      this.setState({
        data : bio,
        firstData : firstBio,
        loading : false,
        error : false
      });

      // set error message
    }).catch((error) => {
      this.setState({
        loading: false,
        error : true
      });
    });

    // get the print image of the bios.
    axios.get(URL + "iac-print-image").then((response) => {
      this.setState({
        iacImageUrl: response.data[0].image.src,
        iacImageAlt: response.data[0].image.alt
      });
    })
  }

  componentDidMount() {
    const LOCATION = (location.search);

    if (LOCATION == "?MembershipFocus=true") {
      this.focus();
    }
  }
  render() {
    return (
      <div>
        <div className="body-content container no-border" id="content" tabIndex="-1">
          <div className="row">
            <div className="col-md-10" id="mainCol">
              <h1>Industry Advisory Committee on Veterans’ Employment</h1>
              <div className="list-contents-wrapper">
                <h2 className="list-contents-header">Contents</h2>
                <ul className="list-contents">
                  <li><Link to="#Terms">Terms of reference</Link></li>
                  <li><Link to="#Membership">Membership</Link></li>
                  <li><Link to="#Key Areas">Key Areas</Link></li>
                  <li><Link to="#News">Latest News</Link></li>
                  <li><Link to="#Contact">Contact</Link></li>
                </ul>
              </div>

              <p>The Industry Advisory Committee on Veterans’ Employment has been established to develop practical measures to embed veterans’ employment strategies into recruitment practices of Australian businesses.</p>
              <p>The Committee will also play a role in the broader promotion of skills and professional attributes that veterans have to offer employers.</p>
              <section className="section-nobreak">
                <h2 id="Terms">Terms of reference</h2>
                <p>The Industry Advisory Committee will:</p>
                <ol>
                  <li>Develop practical measures to embed veterans' employment strategies into the recruitment practices of Australian business.</li>
                  <li>Foster the Committee members and industry leaders to drive creative solutions to provide greater employment opportunities for veterans.</li>
                  <li>Develop a sustainable program for employers to gain an understanding of the experiences, skills and qualities of veterans and how these can be applied in the civilian workforce.</li>
                  <li>Develop a program to monitor recruitment and long term retention rates of veterans in the civilian workforce.</li>
                  <li>Consider any barriers to the successful employment of veterans and recommend strategies to address those barriers.
                  </li>
                  <li>Consider the outcomes of any private sector working groups and respond to matters raised when required.
                  </li>
                  <li>Examine whether there is scope to encourage business to employ the spouses of serving Australian Defence Force members.</li>
                  <li>Provide a report to the Minister for Veterans' Affairs/Defence Personnel by the end of
                    <span className="no-wrap">September 2017</span> outlining the Committee's progress against these Terms of Reference.</li>
                </ol>
              </section>
              <section className="section-nobreak">
                <h2 className="no-border" ref="iacMembership" tabIndex="-1" id="Membership">Membership</h2>
                <p>The Committee comprises a Chair, Deputy Chair, a representative of small businesses, a representative of the Australian Chamber of Commerce and Industry, and representatives of ten other organisations.</p>
                <img className="print-only bio-img text-center" src={this.state.iacImageUrl} alt={this.state.iacImageAlt} aria-hidden="true"/>

                {this.state.loading &&
                  <Loading />
                }

                {this.state.error &&
                  <Error />
                }

                <div className="hidden-print">
                  <div className="col-md-12 row">
                    <div className="col-md-offset-2 col-sm-offset-2">
                      {this.state.firstData.map((firstData, index) => (
                        <div key={index}>
                        <div className="col-md-5 col-sm-5 col-xs-12 text-center">
                          <figure>
                            <img src={firstData.imageurl} alt={firstData.imagealt} className="img-circle" height="150px" width="150px"></img>
                            <figcaption className="bio-title">{firstData.name}</figcaption>
                            <figcaption className="bio-description">{firstData.company}</figcaption>
                            <figcaption className="bio-position">{firstData.role} | <Link to={"/member-biographies?member=" + firstData.id + "Bio" + "#" + firstData.id}>Bio</Link>
                            </figcaption>
                          </figure>
                      </div>
                    </div>
                    ))}
                    </div>

                    {this.state.data.map((data, index) => (
                      <div key={index}>
                        {index % 3 === 0 && <div className="row"/>}
                        <figure className="col-md-4 col-sm-4 col-xs-12 text-center">
                          <img src={data.imageurl} alt={data.imagealt} className="img-circle" height="150px" width="150px"></img>
                          <figcaption className="bio-title">{data.name}</figcaption>
                          <figcaption className="bio-description">{data.company}</figcaption>
                          <figcaption className="bio-position">{data.role} | <Link to={"/member-biographies?member=" + data.id + "Bio" + "#" + data.id}>Bio</Link>
                          </figcaption>
                        </figure>
                      </div>
                    ))}

                  </div>
                </div>
              </section>
              <section className="section-nobreak col-md-12">
                <h2 id="Key Areas">Key Areas</h2>
                <p>The Committee is focusing on five key areas:
                </p>
                <ul>
                  <li>data, research and targets</li>
                  <li>human resources policies, accreditation, retention, translation of skills</li>
                  <li>communications (branding, awareness, transition seminars, website, job fairs)</li>
                  <li>spouse employment of serving ADF members</li>
                  <li>Prime Minister’s Veterans’ Employment Annual Awards</li>
                </ul>

                <IacNews/>

                <div id="Contact">
                  <h2>Contact</h2>
                  <p>IAC Secretariat</p>
                  <p>C/- Department of Veterans' Affairs</p>
                  <p>GPO Box 9998</p>
                  <p>Canberra ACT 2601</p>
                  <h2>Email</h2>
                  <p><a href="mailto:IAC.Secretariat@dva.gov.au">IAC.Secretariat@dva.gov.au</a></p>
                  <TopLink/>
                </div>
              </section>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
