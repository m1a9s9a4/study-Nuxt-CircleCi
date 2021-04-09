import { mount } from '@vue/test-utils'

describe('Hello World', () => {
  test('Helloworld', () => {
    expect('Hello World').toBe("Hello World")
  })
  test('Hello no World', () => {
    expect('hello').toBe("hello");
  });
})
