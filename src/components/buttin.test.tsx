import React from 'react'
import { screen, render } from '@testing-library/react'
// @ts-ignore
import { Button } from './Button';

describe('rendering', () => {
  const root = document.createElement('div');
  beforeEach(() => {
    document.body.appendChild(root);
  })
  test('check text', () => {
    render(<Button />)
    expect(screen.getByRole('button', { name: /hi/i })).toBeInTheDocument
  })
})