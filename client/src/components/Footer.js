import React, { Component } from "react";
import '../styles/footer.css';

export default class FooterPage extends Component {
  render() {
    return (
      <div className="footer">
        <div className="footer-components">Created by:<br/>
                                           Pavlo Zaiats<br/>
                                           Yurii Selskyi<br/>
                                           Vlad Basov<br/>
                                           Yurii Myts<br/>
                                           Dmytro Demkovych
        </div>
        <div className="footer-components">Contact us:<br/>
                                           FiftyOneTeam@gmail.com
        </div>
        <div className="footer-components">Bomj-trip<br/>
                                           NULP<br/>
        </div>
      </div>
  );
  }
}
