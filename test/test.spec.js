Cypress.on('uncaught:exception', (err, runnable) => {
    // returning false here prevents Cypress from
    // failing the test
    return false
})

describe('Kiểm thử nhắn tin trao đổi - Nhóm 100', function () {
  beforeEach('Đăng nhập vào hệ thống', function () {
    cy.log('Login')
    const _username = 'thongletrung166@gmail.com'
    const _password = 'thonghp166'
    cy.visit('http://hoclieu.sachmem.vn')
    cy.contains('Đăng nhập').click()
    cy.get('[id="user_email"]').type(_username)
    cy.get('[id="user_password"]').type(_password)
    cy.get('[name="commit"]').click()
    cy.get('span > .text-dark').click()
    cy.get(':nth-child(2) > :nth-child(1) > .row > .col-9 > .text-dark').click()
    cy.contains('Nhắn tin, trao đổi').click()
  })


  context('Kiểm tra textbox "Tìm kiếm"', function () {
    it('HL-NTTĐ_6 - Kiểm tra giá trị mặc định textbox', function () {
      cy.get('input')
        .should('have.attr', 'placeholder', 'Tìm kiếm')
    })
    it('HL-NTTĐ_7 - Kiểm tra nhập kí tự đặc biệt', function () {
      cy.get('#sidebar-wrapper > :nth-child(1) > .input_search').type('~@!@').should('has.value', '~@!@')
    })
    it('HL-NTTĐ_8 - Kiểm tra nhập kí tự số', function () {
      cy.get('#sidebar-wrapper > :nth-child(1) > .input_search').type('123456').should('has.value', '123456')
    })
    it('HL-NTTĐ_9 - Kiểm tra nhập tiếng việt có dấu', function () {
      cy.get('#sidebar-wrapper > :nth-child(1) > .input_search').type('Lê Trung Thông').should('has.value', 'Lê Trung Thông')
    })
  })

  context('Kiểm tra textbox "Gửi tin nhắn"', function () {
    it('HL-NTTĐ_11 - Kiểm tra giá trị mặc định textbox', function () {
      cy.get('textarea')
        .should('have.attr', 'placeholder', 'Gửi tin nhắn')
    })
    it('HL-NTTĐ_14 - Kiểm tra nhập kí tự đặc biệt', function () {
      cy.get('textarea').type('~@!@').should('has.value', '~@!@')
    })
    it('HL-NTTĐ_13 - Kiểm tra nhập kí tự số', function () {
      cy.get('textarea').type('123456').should('has.value', '123456')
    })
    it('HL-NTTĐ_13 - Kiểm tra nhập kí tự tiếng việt có dấu', function () {
      cy.get('textarea').type('Lê Trung Thông').should('has.value', 'Lê Trung Thông')
    })
  })

  context('Kiểm tra button "Gửi"', function () {
    it('HL-NTTĐ_20 - Kiểm tra hiển thị của Button khi có nội dung textbox', function () {
      cy.get('textarea').type('Lê Trung Thông')
      cy.get('button.btn.btn-primary.pull-right').should('not.be.disabled')
    })
    it('HL-NTTĐ_21 - Kiểm tra hiển thị của Button khi không có nội dung textbox', function () {
      cy.get('button.btn.btn-primary.pull-right').should('be.disabled')
    })
  })
})
