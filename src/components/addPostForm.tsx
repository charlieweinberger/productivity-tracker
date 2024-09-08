"use client";

import { useState } from "react";
// import { useRouter } from "next/navigation";

import type { FormEvent } from 'react';

export default function AddPostForm() {

  const [ title, setTitle ] = useState("");
  // const router = useRouter();

  async function submitPost(event: FormEvent) {
    
    event.preventDefault();

    if (title === "") return;

    const response = await fetch('/api/posts', {
      method: 'POST',
      body: JSON.stringify({ title }),
    });
 
    // update posts on frontend here
    const data = await response.json();
    console.log(data);
    // router.refresh();

  }
 
  return (
    <form onSubmit={submitPost} className="p-4 flexContainer flex-col gap-4 blackBorder">
      <input type="text" value={title} onChange={(e) => setTitle(e.target.value)} className="blackBorder" />
      <button type="submit" className="blackBorder">Submit</button>
    </form>
  );

}