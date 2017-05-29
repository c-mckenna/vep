import React from "react";
import News from "./news";
import {Link} from "react-router-dom";
import ToggleDisplay from "react-toggle-display";


export default class Home extends React.Component {

   constructor() {
    super();
    this.state = { show: false };
  }

  handleClick(e) {
    this.setState({
      show: !this.state.show
    });

    e.preventDefault();
    return false;
  }

  render() {
    return (
      <div className="body-content">
        <div className="jumbotron jumbotron-fluid hidden-print">
          <div className="container">
            <div className="description">
              <div className="row">
                <div className="col-md-8">
                  <p>The Prime Minister's Veterans' Employment Program demonstrates the importance the Government places on raising awareness with employers,
                     both private and public sector, and of the value and unique experience of our veterans.</p>
                     <ToggleDisplay show={this.state.show}>
                     <p>The Australian Defence Force (ADF) invests heavily in its servicemen and women, and they have a broad range of skills and experience.
                        Their skill-sets, including proven leadership and problem solving skills, are in strong demand and transfer readily to civilian employment. </p>
                     <p>Australian businesses of all sizes, and across all industries, have an opportunity to acquire these skilled and capable employees when they
                        separate from the ADF.  The Program aims to make businesses more aware of the value that veterans can add to their organisations, and as a
                        result improve employment opportunities for veterans.</p>

                          <p>On 17 November 2016 the Prime Minister announced six initiatives under the Program.</p>

                <h3>Industry Advisory Committee on Veterans’ Employment</h3>
                <p>The <a href="/iac">Industry Advisory Committee on Veterans’ Employment (IAC)</a> will be established to develop and
                  provide advice on practical measures to embed veterans’ employment strategies into the recruitment
                  practices of Australian businesses.  The Committee will play a role in the broader promotion of the
                  skills and professional attributes that veterans have to offer employers.</p>

                <h3>The Prime Minister’s Veterans’ Employment Annual Awards</h3>
                <p>The Prime Minister’s Veterans’ Employment Annual Awards will recognise the achievements of companies
                  in creating employment opportunities for veterans.  The criteria for the awards will be developed in
                  consultation with the Industry Advisory Committee on Veterans’ Employment.</p>
                <p>The inaugural awards will be presented in late 2017.</p>

                <h3>Ex-Service Organisation Industry Partnership Register</h3>
                <p>Ex-service organisations will be able to register their interest in partnering with industry on
                  projects to promote the employment of veterans.  Industry will be able to access this information
                  when they are seeking a partner to assist in the creation of employment opportunities for veterans,
                  including in regional and remote areas of the country.</p>
                <p>Ex-service organisations can register their interest by
                  emailing <a href="mailto:ESOindustryregister@dva.gov.au">ESOindustryregister@dva.gov.au</a></p>

                <h3>Department of Defence and Department of Veterans’ Affairs initiatives</h3>
                <p>The Departments of Defence (Defence) and Veterans’ Affairs (DVA) will continue to improve the transition process for separating members of the Australian Defence Force (ADF). </p>
                <p>Separating members of the ADF will receive separation documentation, including training records.  They will also receive an individual transition plan and tailored transition coaching services.  Surveys of former ADF personnel post-separation will be reinstated to assess the effectiveness of ADF transition programs and inform future initiatives, and work will continue on aligning military qualifications with civilian qualifications.</p>
                <p>Vocational rehabilitation services for veterans with an ADF-related injury or illness will also be improved.</p>

                <h3>Australian Public Service (APS) initiatives</h3>
                <p>A new <a href="https://www.apsjobs.gov.au/" target="_blank">APSjobs website</a> will be launched in 2017 and will include specific information
                  for veterans seeking employment in the APS.  An application that aligns ADF ranks to APS
                  classifications and a toolkit that provides information to veterans about working in the APS
                  are also being developed.</p>

                <h3>Department of Employment initiatives</h3>
                <p>The Australian Government’s <a href="https://jobactive.gov.au/" target="_blank">jobactive website</a> will
                  include an <a href="https://jobsearch.gov.au/jobseeker-info/employment-assistance-for-veterans" target="_blank">information page for veterans</a> and
                  an optional ‘defence force experience desirable’
                  flag for vacancies listed on the website.  This will enable former ADF members seeking a job
                  to <a href="https://jobsearch.gov.au/job/search/ex-adf" target="_blank">search for vacancies</a> for
                  which they would be well suited and allow them to apply directly to the employer.</p>
                <p>The Department of Employment will also develop a stronger partnership with the Department of Defence
                  to enhance the Career Transition Assistance Scheme for separating ADF members, including the
                  provision of employment planning advice and labour market information.</p>

                    </ToggleDisplay><a href="#" onClick={ (e) => this.handleClick(e) }>{this.state.show ? 'Read less' : 'Read more'}</a>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="jumbotron jumbotron-fluid print-only">
          <div className="container">
            <div className="description">
              <div className="row">
                <div className="col-md-8">
                  <p>The Prime Minister's Veterans' Employment Program demonstrates the importance the Government places on raising awareness with employers,
                     both private and public sector, and of the value and unique experience of our veterans.</p>
                     <p>The Australian Defence Force (ADF) invests heavily in its servicemen and women, and they have a broad range of skills and experience.
                        Their skill-sets, including proven leadership and problem solving skills, are in strong demand and transfer readily to civilian employment. </p>
                     <p>Australian businesses of all sizes, and across all industries, have an opportunity to acquire these skilled and capable employees when they
                        separate from the ADF.  The Program aims to make businesses more aware of the value that veterans can add to their organisations, and as a
                        result improve employment opportunities for veterans.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <News/>
      </div>
    );
  }
}
