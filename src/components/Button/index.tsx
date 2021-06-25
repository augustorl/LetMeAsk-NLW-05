import { ButtonHTMLAttributes } from 'react'

import { MyButton } from './styles';

type ButtonProps = ButtonHTMLAttributes<HTMLButtonElement> & {
  isOutlined?: boolean;
};

export function Button({ isOutlined = false, ...props}: ButtonProps) {
  return (
    <MyButton
    className={`button ${isOutlined ? 'outlined' : ''}`} 
    {...props} />
  )
}