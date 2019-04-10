Cypress.on('uncaught:exception', (err, runnable) => {
    // returning false here prevents Cypress from
    // failing the test
    return false
})

describe('Lê Trung Thông - Test', function () {
  beforeEach(function () {
    cy.log('Login')
    const _username = 'thongletrung166@gmail.com'
    const _password = 'thonghp166'
    cy.visit('http://hoclieu.sachmem.vn')
    cy.contains('Đăng nhập').click()
    cy.get('[id="user_email"]').type(_username)
    cy.get('[id="user_password"]').type(_password)
    cy.get('[name="commit"]').click()
    cy.contains('Lớp học của tôi').click()
    cy.get('[class="text-dark pl-1"]').contains('Lớp 4 - Test').click()
    cy.contains('Nhắn tin, trao đổi').click()
  })
  context('HL-NTTĐ_11', function () {
    it('Placeholder gửi tin nhắn textbox', function () {
      cy.get('textarea')
        .should('have.attr', 'placeholder', 'Gửi tin nhắn')
    })
  })

  context('HL-NTTĐ_13', function () {
    it('Kiểm tra nhập kí tự số', function () {
      cy.get('textarea').type('123456').should('has.value', '123456')
    })
  })
})
