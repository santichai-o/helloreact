import React, { Component } from 'react'
import { connect } from 'react-redux'
import fetch from 'isomorphic-fetch'
import Page from './Page'
import { API_ROOT } from './endpoints'
import { loadPages } from '../actions/page'

class Pages extends Component {
    constructor(props, context) {
		super(props,context);
		this.props = props;
	}

    shouldComponentUpdate(nextProps) {
        return this.props.pages !== nextProps.pages;
    }

    onReloadPages(a) {
       this.props.onLoadPages()
    }

    componentDidMount() {
        this.onReloadPages(1) 
    }

    render() {
        return (
            <div>
                <button className='button' onClick={() => this.onReloadPages(1)}>
                    Reload Pages
                </button>
                <table className='table'>
                    <thead>
                    <tr>
                        <th>ID</th>
                        <th>Title</th>
                        <th>Action</th>
                    </tr>
                    </thead>
                    <tbody>
                    {
                        this.props.pages.map(
                            (page) => <Page key={page.id} page={page} onPageEdit={this.onReloadPages.bind(this)} />
                        )
                    }
                    </tbody>
                </table>
            </div>
        )
    }
}

// state ในที่นี้หมายถึงสถานะของแอพพลิเคชันที่เก็บอยู่ใน store
const mapStateToProps = (state) => ({
  // เมื่อ state ใน store มีการเปลี่ยนแปลง
  // เราไม่สนใจทุก state
  // เราสนใจแค่ state ของ pages
  // โดยทำการติดตั้ง pages ให้เป็น props
  // เราใช้ชื่อ key ของ object เป็นอะไร
  // key ตัวนั้นจะเป็นชื่อที่เรียกได้จาก props ของคอมโพแนนท์
  pages: state.pages.data
})

// ส่ง dispatch ของ store เข้าไปให้เรียกใช้
// อยาก dispatch อะไรไปให้ reducer ก็สอยเอาตามปรารถนาเลยครับ
const mapDispatchToProps = (dispatch) => ({
  onLoadPages: (a) => dispatch(loadPages(a))
})

// วิธีใช้ connect สังเกตนะครับส่งสองฟังก์ชันคือ
// mapStateToProps และ mapDispatchToProps เข้าไปใน connect
// จะได้ฟังก์ชันใหม่ return กลับมา
// แล้วเราก็ส่ง PagesContainer ที่เป้นคอมโพแนนท์ที่ต้องการเชื่อมต่อกับ store
// เข้าไปในฟังก์ชันใหม่นี้อีกที
// มันคือ Higher-order function นั่นเอง
export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Pages)

//export default Pages