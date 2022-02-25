import React, { Component } from 'react'
import Profil from '../moi.jpeg';

export default class profilePhoto extends Component {
  render() {
    return (
      <>
        <img src={Profil}  alt="my-pp" />
      </>
    )
  }
}
