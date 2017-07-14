const initialState = { data:[], message: '' }

// reducer นั้นเป็นฟังก์ชันที่รับพารามิเตอร์สองตัว
// คือสถานะก่อนหน้า (previous state) และอ็อบเจ็กต์ action
// ตัวอย่างเช่นถ้าเราจะเพิ่มหน้าวิกิใหม่ สถานะก่อนหน้าอาจเป็นหน้าวิกิทั้งหมด
// เมื่อ reducer ทำงานเสร็จจะเพิ่มวิกิใหม่มี่เราพึ่งสร้าง เข้าไปในสถานะก่อนหน้าซึ่งก็คือวิกิทั้งหมดที่มีอยู่ก่อน
// ในกรณีที่เราไม่มีสถานะก่อนหน้า เราบอก reducer ว่าให้ใช้ค่า initialState
// ซึ่งก็คืออาร์เรย์ว่างเปล่าเป็นสถานะตั้งต้น
// สำหรับ [] ใน pages reducer นี้หมายความว่า
// เริ่มต้นนั้นเราไม่มีหน้าวิกิอยู่ในระบบเลย
export default (state = initialState, action) => {
  switch(action.type) {
    // เมื่อไหร่ก็ตามที่ action มีชนิดเป็น RECEIVE_PAGES
    // ให้แกะดูข้อมูล pages จากก้อนอ็อบเจ็กต์ action
    // pages นี้คือหน้าวิกิทั้งหมด
    // เราคืนค้ากลับออกไปจาก reducer เป็นวิกิทั้งหมดที่ได้จากอ็อบเจ็กต์ action
    case 'LOAD_PAGES_SUCCESS':
      // ยัดเพจใหม่เข้าไปในวิกิทั้งหมดที่มีอยู่แต่เดิม
      // นี่คือการเปลี่ยนแปลง previous state
      // ไม่ควรทำ
      //state.push(action.page)
      // จากนั้นก็โยน previous state ที่ผ่านการรุมยำเรียบร้อยแล้วออกไป
      //console.log(action.pages);
      return Object.assign({}, state, { message: 'success', data: action.pages })
    case 'LOAD_PAGES_REQUEST':
      return Object.assign({}, state, { message: 'waiting' });
    case 'LOAD_PAGES_FAILURE':
      return Object.assign({}, state, { message: 'error.....' });
    default:
      return state
  }
}