"""
Python Exam Portal - Local Server & Auto-Browser Launcher
Runs a lightweight local web server and opens the Exam Portal in default browser.
"""

import http.server
import socketserver
import webbrowser
import os
import sys
from pathlib import Path

PORT = 8080
DIRECTORY = Path(__file__).resolve().parent

class CustomHandler(http.server.SimpleHTTPRequestHandler):
    def __init__(self, *args, **kwargs):
        super().__init__(*args, directory=str(DIRECTORY), **kwargs)
    
    def log_message(self, format, *args):
        # Clean terminal output
        pass

def find_available_port(start_port=8080):
    import socket
    port = start_port
    while port < start_port + 50:
        with socket.socket(socket.AF_INET, socket.SOCK_STREAM) as sock:
            res = sock.connect_ex(('127.0.0.1', port))
            if res != 0:
                return port
            port += 1
    return start_port

def main():
    port = find_available_port(PORT)
    url = f"http://127.0.0.1:{port}/index.html"
    
    print("=" * 65)
    print("  🚀 PYTHON SEMESTER 1 EXAM PORTAL (Topics 05 to 15)")
    print("=" * 65)
    print(f"  • Total Questions: 150 (120 Basic-Medium + 30 High Bonus)")
    print(f"  • Serving directory: {DIRECTORY}")
    print(f"  • Exam URL: {url}")
    print("=" * 65)
    print("  Opening browser automatically... Press Ctrl+C to stop server.\n")
    
    webbrowser.open(url)
    
    with socketserver.TCPServer(("127.0.0.1", port), CustomHandler) as httpd:
        try:
            httpd.serve_forever()
        except KeyboardInterrupt:
            print("\nExam Portal server stopped. Good luck with your exam tomorrow!")

if __name__ == "__main__":
    main()

