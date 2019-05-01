import React, { Component } from 'react';
import Image from 'react-bootstrap/Image'
import Row from 'react-bootstrap/Row'
import Container from 'react-bootstrap/Container'
import Col from 'react-bootstrap/Col'
export default class CafeList extends Component {
  constructor(props) {
    super(props);
  }

  renderCafeList = () => {
    const { list } = this.props;
    return list.map((item) => (
      <div>
        <div>
          <Container>
            <Row>
              <Col xs={2} md={1}>
                <Image src="https://img.webmd.com/dtmcms/live/webmd/consumer_assets/site_images/article_thumbnails/quizzes/fast_food_smarts_rmq/650x350_fast_food_smarts_rmq.jpg" rounded />
              </Col>
            </Row>
          </Container>
        </div>
        <div>
          information
        </div>
      </div>
    ))
  }

  render() {
    return (
      <div>
        {this.renderCafeList()}
      </div>
    );
  }
}
