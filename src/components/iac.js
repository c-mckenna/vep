import React from "react";
import IacNews from "./partials/iacnews";
import BioColbert from "../image/bios/biocolbert.jpg";
import BioFrazis from "../image/bios/biofrazis.jpg";
import BioBlake from "../image/bios/bioblake.jpg";
import BioGalgsdies from "../image/bios/biogalgsdies.jpg";
import BioJansen from "../image/bios/biojansen.jpg";
import BioLambert from "../image/bios/biolambert.jpg";
import BioLefever from "../image/bios/biolefever.jpg";
import BioMcdowell from "../image/bios/biomcdowell.jpg";
import BioPalmerlee from "../image/bios/biopalmerlee.jpg";
import BioParker from "../image/bios/bioparker.jpg";
import BioPlaskett from "../image/bios/bioplaskett.jpg";
import BioRobertsSmith from "../image/bios/bioroberts-smith.jpg";
import BioRosenfield from "../image/bios/biorosenfield.jpg";
import BioWard from "../image/bios/bioward.jpg";
import Bio_Print from "../image/bios/iac_bio.png";

export default class IAC extends React.Component {

  render() {
    return (
      <div>
          <div className="body-content container">
            <div className="row">
              <div className="col-md-10" id="mainCol">
                <h1 id="content">Industry Advisory Committee on Veterans’ Employment</h1>
                <ul className="list-unstyled">
                  <li className="list-unstyled-header">Contents</li>
                  <li><a href="#Terms">Terms of reference</a></li>
                  <li><a href="#Membership">Membership</a></li>
                  <li><a href="#Groups">Working groups</a></li>
                  <li><a href="#News">Latest News</a></li>
                  <li><a href="#Contact">Contact</a></li>
                </ul>

                <p>The Industry Advisory Committee (IAC) on Veterans’ Employment has been established to develop
                  practical measures to embed veterans’ employment strategies into recruitment
                   practices of Australian businesses.</p>
                <p>The Committee will also play a role in the broader promotion of skills and professional attributes
                   that veterans have to offer employers</p>
                   <section id="section-nobreak">
                <h2 id="Terms">Terms of reference</h2>
                <p>The Industry Advisory Committee will:</p>
                <ol>
                  <li>Develop practical measures to embed veterans' employment strategies into the recruitment
                      practices of Australian business.</li>
                  <li>Foster the Committee members and industry leaders to drive creative solutions to provide
                      greater employment opportunities for veterans.</li>
                  <li>Develop a sustainable program for employers to gain an understanding of the experiences,
                      skills and qualities of veterans and how these can be applied in the civilian workforce.</li>
                  <li>Develop a program to monitor recruitment and long term retention rates of veterans in the
                      civilian workforce.</li>
                  <li>Consider any barriers to the successful employment of veterans and recommend strategies
                      to address those barriers.
                  </li>
                  <li>Consider the outcomes of any private sector working groups and respond to matters raised
                      when required.
                  </li>
                  <li>Examine whether there is scope to encourage business to employ the spouses of serving
                      Australian Defence Force members.</li>
                  <li>Provide a report to the Minister for Veterans' Affairs/Defence Personnel by end of September
                      2017 outlining the Committee's progress against these Terms of Reference.</li>
                </ol>
              </section>
                <section id="section-nobreak">
                <h2 id="Membership">Membership</h2>
                <p>The committee comprises a Chair, Deputy Chair, a representative of small businesses, a representative of the Australian Chamber of Commerce and Industry, and representatives of ten other organisations.</p>
                  <img className="print-only bio-img text-center" src={Bio_Print} alt="Printing version of Industry Advisory Committee Membership" aria-hidden="true"/>
                <div className="hidden-print">
                <div className="row">
                  <div className="col-md-offset-2 col-sm-offset-2 col-md-4 col-sm-4 col-xs-12 text-center">
                    <img src={BioFrazis} alt="Image of George Frazis" className="img-circle" height="150px" width="150px"></img>
                    <h3>George Frazis</h3>
                    <h4>Westpac Group</h4>
                    <p>Chair | <a href="/member-biographies#BioFrazis">Bio</a></p>

                  </div>
                  <div className="col-md-4 col-sm-4 col-xs-12 text-center">
                    <img src={BioRobertsSmith} alt="Image of Ben Roberts-Smith" className="img-circle" height="150px" width="150px"></img>
                    <h3>Ben Roberts-Smith VC, MG</h3>
                    <h4>Seven Network</h4>
                    <p>Deputy Chair | <a href="/member-biographies#BioRobertsSmith">Bio</a></p>

                  </div>
                </div>

                <div className="row">

                  <div className="col-md-4 col-sm-4 col-xs-12 text-center">
                    <img src={BioBlake} alt="Image of Chris Blake" className="img-circle" height="150px" width="150px"></img>
                    <h3>Chris Blake</h3>
                    <h4>Australia Post</h4>
                    <p>Member | <a href="/member-biographies#BioBlake" >Bio</a></p>
                  </div>
                  <div className="col-md-4 col-sm-4 col-xs-12 text-center">
                    <img src={BioColbert} alt="Image of Natalie Colbert" className="img-circle" height="150px" width="150px"></img>
                    <h3>Natalie Colbert</h3>
                    <h4>CanPLAY Pty Ltd</h4>
                    <p>Small Business Representative | <a href="/member-biographies#BioColbert" >Bio</a></p>
                  </div>
                  <div className="col-md-4 col-sm-4 col-xs-12 text-center">
                    <img src={BioGalgsdies} alt="Image of Mark Galgsdies" className="img-circle" height="150px" width="150px"></img>
                    <h3>Mark Galgsdies</h3>
                    <h4>Serco Asia Pacific</h4>
                    <p>Member | <a href="/member-biographies#BioGalgsdies" >Bio</a></p>
                  </div>

                </div>

                <div className="row">

                <div className="col-md-4 col-sm-4 col-xs-12 text-center">
                    <img src={BioJansen} alt="Image of Mark Jansen" className="img-circle" height="150px" width="150px"></img>
                    <h3>Mark Jansen</h3>
                    <h4>PwC</h4>
                    <p>Member | <a href="/member-biographies#BioJansen" >Bio</a></p>
                </div>
                <div className="col-md-4 col-sm-4 col-xs-12 text-center">
                    <img src={BioLambert} alt="Image of Jenny Lambert" className="img-circle" height="150px" width="150px"></img>
                    <h3>Jenny Lambert</h3>
                    <h4>Australian Chamber of Commerce and Industry</h4>
                    <p>Member | <a href="/member-biographies#BioLambert" >Bio</a></p>
                </div>

                  <div className="col-md-4 col-sm-4 col-xs-12 text-center">
                    <img src={BioLefever} alt="Image of Jim Lefever" className="img-circle" height="150px" width="150px"></img>
                    <h3>Jim Lefever</h3>
                    <h4>CSC Australia Pty Ltd</h4>
                    <p>Member | <a href="/member-biographies#BioLefever" >Bio</a></p>
                  </div>

                </div>

                <div className="row">
                   <div className="col-md-4 col-sm-4 col-xs-12 text-center">
                    <img src={BioMcdowell} alt="Image of Colin McDowell" className="img-circle" height="150px" width="150px"></img>
                    <h3>Colin McDowell</h3>
                    <h4>Allied Express Transport</h4>
                    <p>Member | <a href="/member-biographies#BioMcdowell" >Bio</a></p>
                  </div>
                  <div className="col-md-4 col-sm-4 col-xs-12 text-center">
                    <img src={BioPalmerlee} alt="Image of Luke Palmerlee" className="img-circle" height="150px" width="150px"></img>
                    <h3>Luke Palmerlee</h3>
                    <h4>J.P. Morgan Chase Bank, NA</h4>
                      <h4>(Sydney Branch)</h4>
                     <p>Member | <a href="/member-biographies#BioPalmerlee" >Bio</a></p>
                  </div>
                  <div className="col-md-4 col-sm-4 col-xs-12 text-center">
                    <img src={BioParker} alt="Image of Christine Parker" className="img-circle" height="150px" width="150px"></img>
                    <h3>Christine Parker</h3>
                    <h4>Westpac Group</h4>
                    <p>Member | <a href="/member-biographies#BioParker" >Bio</a></p>
                  </div>

                </div>

                <div className="row">
                  <div className="col-md-4 col-sm-4 col-xs-12 text-center">
                    <img src={BioPlaskett} alt="Image of Andrew Plaskett" className="img-circle" height="150px" width="150px"></img>
                    <h3>Andrew Plaskett</h3>
                    <h4>Clayton Utz</h4>
                    <p>Member | <a href="/member-biographies#BioPlaskett" >Bio</a></p>
                  </div>
                  <div className="col-md-4 col-sm-4 col-xs-12 text-center">
                    <img src={BioRosenfield} alt="Image of Dean Rosenfield" className="img-circle" height="150px" width="150px"></img>
                    <h3>Dean Rosenfield</h3>
                    <h4>Saab Australia Pty Ltd</h4>
                    <p>Member | <a href="/member-biographies#BioRosenfield" >Bio</a></p>
                  </div>
                  <div className="col-md-4 col-sm-4 col-xs-12 text-center">
                    <img src={BioWard} alt="Image of Michael Ward" className="img-circle" height="150px" width="150px"></img>
                    <h3>Michael Ward</h3>
                    <h4>Raytheon Australia</h4>
                    <p>Member | <a href="/member-biographies#BioWard" >Bio</a></p>
                  </div>
                </div>
              </div>
            </section>
            <section id="section-nobreak">
                <h2 id="Groups">Working groups</h2>
                <p>The Committee will initially focus on eight key areas:
                </p>
                <ul>
                  <li>data and the business case for hiring veterans</li>
                  <li>translation of skills, including use of common language</li>
                  <li>awareness, career fairs and branding, including accrediting veterans’ employers</li>
                  <li>human resources policies and targets</li>
                  <li>on-boarding, transition, retention and mentors, including links with reserves and other
                      defence support organisations</li>
                  <li>employment of spouses</li>
                  <li>appreciation of the contribution of veterans by the community</li>
                  <li>the Prime Minister’s Veterans’ Employment Annual Awards</li>
                </ul>

                <IacNews/>
                <div id="Contact">
                <h2>Contact</h2>
                 <p>IAC Secretariat </p>
                 <p>C/- Department of Veterans' Affairs</p>
                 <p>GPO Box 9998</p>
                 <p>Canberra ACT 2601</p>

                <h2>Email</h2>
                <p><a href="mailto:IAC.Secretariat@dva.gov.au">IAC.Secretariat@dva.gov.au</a></p>

                <p className="hidden-print">
                  <a href="#">Top
                    <span className="glyphicon glyphicon-arrow-up" aria-hidden="true"></span>
                  </a>
                </p>
                </div>
              </section>
              </div>
            </div>
          </div>
      </div>
    );
  }
}
