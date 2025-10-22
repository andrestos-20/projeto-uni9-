export const Textarea = (p:React.TextareaHTMLAttributes<HTMLTextAreaElement>) => <textarea {...p} className={(p.className||'')+' input'} />;
import React from 'react';