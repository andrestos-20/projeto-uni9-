export const Button = (p:React.ButtonHTMLAttributes<HTMLButtonElement>) => <button {...p} className={(p.className||'')+' btn'} />;
import React from 'react';