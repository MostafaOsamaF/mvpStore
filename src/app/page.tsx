"use client";

import React, { useState } from "react";

type TeamMember = {
  name: string;
  role: string;
};

export default function UnderConstructionPage() {
  const logoSrc = undefined;
  const companyName = "Nexora";
  const team: TeamMember[] = [
    { name: "اسامه فتحي", role: "Project Manager" },
    { name: "مصطفى أسامة", role: "Full Stack Developer" },
  ];

  const [preview, setPreview] = useState<string | null>(logoSrc ?? null);

  function handleFile(e: React.ChangeEvent<HTMLInputElement>) {
    const file = e.target.files?.[0];
    if (!file) return;
    const url = URL.createObjectURL(file);
    setPreview(url);
  }

  return (
    <main className="min-h-screen bg-gradient-to-br from-gray-50 to-white flex items-center justify-center p-6">
      <div className="max-w-3xl w-full bg-white shadow-2xl rounded-2xl border border-gray-100 overflow-hidden">
        <div className="flex flex-col md:flex-row items-center gap-6 p-8 md:p-12">
          <div className="w-40 h-40 flex-shrink-0 rounded-xl bg-gray-100 flex items-center justify-center overflow-hidden">
            {preview ? (
              <img
                src={preview}
                alt="logo preview"
                className="object-contain w-full h-full p-4"
              />
            ) : (
              <div className="text-center px-3">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  className="mx-auto mb-1 h-10 w-10 opacity-60"
                >
                  <path
                    fill="currentColor"
                    d="M12 2a10 10 0 100 20 10 10 0 000-20zm1 14h-2v-2h2v2zm0-4h-2V6h2v6z"
                  />
                </svg>
                <p className="text-xs text-gray-500">{companyName}</p>
              </div>
            )}
          </div>

          <div className="flex-1">
            <h1 className="text-2xl md:text-3xl font-semibold text-gray-900 mb-2">
              {companyName}
            </h1>
            <p className="text-gray-600 mb-4">
              هذا الموقع تابع للشركة أعلاه — متجر إلكتروني قيد التطوير.
            </p>
            <p className="text-gray-500 mb-6">
              This site belongs to the company above — an e-commerce site
              currently under development.
            </p>

            <div className="flex flex-wrap gap-3">
              <p className="inline-flex items-center justify-center px-4 py-2 rounded-lg bg-gray-100 border border-gray-200 text-sm text-gray-700 shadow-sm">
                Contact: mostafaosama1020@gmail.com
              </p>

              <a
                className="inline-flex items-center justify-center px-4 py-2 rounded-lg bg-indigo-600 text-white text-sm shadow hover:brightness-105"
                href="#"
                onClick={(e) => e.preventDefault()}
              >
                اطلاع عند الإطلاق
              </a>
            </div>
          </div>
        </div>

        <div className="bg-gray-50 border-t border-gray-100 p-6">
          <h2 className="text-lg font-semibold text-gray-800 mb-3 text-center">
            فريق العمل
          </h2>
          <div className="grid sm:grid-cols-2 gap-4 text-center">
            {team.map((member) => (
              <div
                key={member.name}
                className="p-3 bg-white border border-gray-100 rounded-lg shadow-sm"
              >
                <p className="font-medium text-gray-900">{member.name}</p>
                <p className="text-sm text-gray-500">{member.role}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </main>
  );
}
