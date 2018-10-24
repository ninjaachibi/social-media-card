import React, { Component } from 'react';
import styled from 'styled-components'
import Card from './Card'

// sample colors: https://coolors.co/000000-140d4f-292f36-ffffff-301014

const items = [
  {
    posterUsername: "@sheryl",
    posterName: "Sheryl Sandberg",
    body: "Why should we learn application based CS? Because the best part of Computer Science is building stuff!",
    posterPicUrl: "https://d3iw72m71ie81c.cloudfront.net/female-80.jpg",
    dateString: "10/18/2018 at 10:15 am",
    likes: 5,
    shares: 2
  },
  {
    posterUsername: "@drew",
    posterName: "Drew Houston",
    body: "Who should we bring in to talk to sandbox? There are a ton of people who would want to support application-based computer science at Yale. We can bring them in to talk with us. Who do you want to learn from?",
    posterPicUrl: "https://d3iw72m71ie81c.cloudfront.net/anders.png",
    dateString: "10/15/2018 at 3:02 pm",
    likes: 5,
    shares: 2
  },
  {
    posterUsername: "@sara",
    posterName: "Sara Bareilles",
    body: "Our scariest president was probably Rushmore, because he had four heads",
    posterPicUrl: "https://d3iw72m71ie81c.cloudfront.net/female-55.jpeg",
    dateString: "10/14/2018 at 9:32 pm",
    likes: 5,
    shares: 2
  },
  {
    posterUsername: "@sheryl",
    posterName: "Sheryl Sandberg",
    body: "Why should we learn application based CS? Because the best part of Computer Science is building stuff!",
    posterPicUrl: "https://d3iw72m71ie81c.cloudfront.net/female-80.jpg",
    dateString: "10/18/2018 at 10:15 am",
    likes: 5,
    shares: 2
  },
  {
    posterUsername: "@drew",
    posterName: "Drew Houston",
    body: "Who should we bring in to talk to sandbox? There are a ton of people who would want to support application-based computer science at Yale. We can bring them in to talk with us. Who do you want to learn from?",
    posterPicUrl: "https://d3iw72m71ie81c.cloudfront.net/anders.png",
    dateString: "10/15/2018 at 3:02 pm",
    likes: 5,
    shares: 2
  },
  {
    posterUsername: "@sara",
    posterName: "Sara Bareilles",
    body: "Our scariest president was probably Rushmore, because he had four heads",
    posterPicUrl: "https://d3iw72m71ie81c.cloudfront.net/female-55.jpeg",
    dateString: "10/14/2018 at 9:32 pm",
    likes: 5,
    shares: 2
  },
  {
    posterUsername: "@sheryl",
    posterName: "Sheryl Sandberg",
    body: "Why should we learn application based CS? Because the best part of Computer Science is building stuff!",
    posterPicUrl: "https://d3iw72m71ie81c.cloudfront.net/female-80.jpg",
    dateString: "10/18/2018 at 10:15 am",
    likes: 5,
    shares: 2
  },
  {
    posterUsername: "@drew",
    posterName: "Drew Houston",
    body: "Who should we bring in to talk to sandbox? There are a ton of people who would want to support application-based computer science at Yale. We can bring them in to talk with us. Who do you want to learn from?",
    posterPicUrl: "https://d3iw72m71ie81c.cloudfront.net/anders.png",
    dateString: "10/15/2018 at 3:02 pm",
    likes: 5,
    shares: 2
  },
  {
    posterUsername: "@sara",
    posterName: "Sara Bareilles",
    body: "Our scariest president was probably Rushmore, because he had four heads",
    posterPicUrl: "https://d3iw72m71ie81c.cloudfront.net/female-55.jpeg",
    dateString: "10/14/2018 at 9:32 pm",
    likes: 5,
    shares: 2
  },
]

const AppWrapper = styled.div`
  display: flex;
  flex: 1;
  flex-direction: column;
  align-items: center;
`

const Header = styled.div`
  display: flex;
  flex-direction: row;
  width: 100%;
  justify-content: space-between;
  align-items: center;
  font-size: 26px;
  font-weight: 600;
  border-bottom: 1px solid rgba(1,1,1,0.1);
  color: #ffffff;
  background-color: #301014;
  padding-top: 20px;
  padding-bottom: 20px;
`

const Cards = styled.div`
  display: flex;
  flex-direction: column;
  padding: 40px;
`

class App extends Component {

  constructor(props) {
    super(props)
    this.state = {
      items: items
    }
  }

  render() {
    return (
      <AppWrapper>
        <Header>
          <img src={require('./unicorn.png')} style={{width: 40, height: 40, marginLeft: 40}}/>
          the next social media unicorn?
          <div style={{width: 40, height: 40, marginRight: 40}}/>
        </Header>
        <Cards>
          {this.state.items.map(item => {
            return <Card {...item}/>
          })}
        </Cards>
      </AppWrapper>
    );
  }
}

export default App;
