"use client";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { FormEvent, useRef } from "react";

export function ContactForm() {
  const formRef = useRef<HTMLFormElement>(null);

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const formData = new FormData(e.currentTarget);
    const name = formData.get("name");
    const email = formData.get("email");
    const phone = formData.get("phone");
    const message = formData.get("message");

    const mailtoLink = `mailto:sarah@thumbshine.co.kr?subject=복도리 제품 문의&body=이름/기관명: ${name}%0D%0A이메일: ${email}%0D%0A연락처: ${phone}%0D%0A문의내용:%0D%0A${message}`;
    window.location.href = mailtoLink;
    
    // 폼 초기화
    formRef.current?.reset();
  };

  return (
    <form ref={formRef} onSubmit={handleSubmit} className="space-y-4 bg-white p-8 rounded-lg shadow-md">
      <div>
        <Label htmlFor="name">이름 / 기관명</Label>
        <Input
          name="name"
          id="name"
          type="text"
          placeholder="이름 또는 기관명을 입력해주세요"
          className="mt-2"
          required
        />
      </div>
      <div>
        <Label htmlFor="email">이메일</Label>
        <Input
          name="email"
          id="email"
          type="email"
          placeholder="이메일을 입력해주세요"
          className="mt-2"
          required
        />
      </div>
      <div>
        <Label htmlFor="phone">연락처</Label>
        <Input
          name="phone"
          id="phone"
          type="tel"
          placeholder="연락처를 입력해주세요"
          className="mt-2"
          required
        />
      </div>
      <div>
        <Label htmlFor="message">문의 내용</Label>
        <Textarea
          name="message"
          id="message"
          placeholder="문의 내용을 입력해주세요"
          rows={4}
          className="mt-2"
          required
        />
      </div>
      <Button type="submit" className="w-full bg-green-600 hover:bg-green-700 text-white">
        문의하기
      </Button>
    </form>
  );
} 