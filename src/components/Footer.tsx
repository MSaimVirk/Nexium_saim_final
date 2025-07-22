import { Button } from "./ui/button"
import { Github, Linkedin } from "lucide-react";

export default function Footer() {
    return (
      <footer className="bg-gray-100 dark:bg-neutral-900 mt-auto py-4">
        <div className="flex justify-center gap-4 mb-6">
            <Button asChild variant="outline" size="icon" className="rounded-full shadow hover:bg-gray-100 transition">
              <a href="https://github.com/mSaimVirk" target="_blank" rel="noopener noreferrer" aria-label="GitHub">
                <Github className="w-5 h-5" />
              </a>
            </Button>
            <Button asChild variant="outline" size="icon" className="rounded-full shadow hover:bg-blue-50 transition">
              <a href="https://linkedin.com/in/saim-virk/" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn">
                <Linkedin className="w-5 h-5 text-blue-600" />
              </a>
            </Button>
          </div>
        <div className="text-center text-sm text-gray-600">
          © {new Date().getFullYear()} Mental Health Tracker — All rights reserved.
        </div>
      </footer>
    )
  }