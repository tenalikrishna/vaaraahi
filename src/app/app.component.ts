import { Component } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [ReactiveFormsModule, CommonModule],
  template: `
    <!-- Header -->
    <header class="bg-white shadow-md">
      <nav class="container mx-auto px-4 py-6">
        <div class="flex justify-between items-center">
          <span class="text-2xl font-bold text-gray-800">Vaaraahi Constructions</span>
        </div>
      </nav>
    </header>

    <!-- Main Content -->
    <main>
      <!-- Hero Section -->
      <section class="relative h-[600px]">
        <img src="https://images.unsplash.com/photo-1504307651254-35680f356dfd" 
             alt="Construction site" 
             class="w-full h-full object-cover brightness-50">
        <div class="absolute inset-0 flex items-center justify-center">
          <div class="text-center text-white">
            <h1 class="text-5xl font-bold mb-4">Building Your Future</h1>
            <p class="text-xl">Excellence in Construction and Real Estate Development</p>
          </div>
        </div>
      </section>

      <!-- Projects Section -->
      <section class="py-16 bg-gray-100">
        <div class="container mx-auto px-4">
          <h2 class="text-3xl font-bold text-center mb-12">Our Projects</h2>
          <div class="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div class="bg-white rounded-lg overflow-hidden shadow-lg">
              <img src="https://images.unsplash.com/photo-1503387762-592deb58ef4e" 
                   alt="Residential project" 
                   class="w-full h-64 object-cover">
              <div class="p-6">
                <h3 class="text-xl font-bold mb-2">Residential Complex</h3>
                <p class="text-gray-600">Modern living spaces designed for comfort</p>
              </div>
            </div>
            <div class="bg-white rounded-lg overflow-hidden shadow-lg">
              <img src="https://images.unsplash.com/photo-1486406146926-c627a92ad1ab" 
                   alt="Commercial project" 
                   class="w-full h-64 object-cover">
              <div class="p-6">
                <h3 class="text-xl font-bold mb-2">Commercial Buildings</h3>
                <p class="text-gray-600">State-of-the-art office spaces</p>
              </div>
            </div>
            <div class="bg-white rounded-lg overflow-hidden shadow-lg">
              <img src="https://images.unsplash.com/photo-1590274853856-f22d5ee3d228" 
                   alt="Infrastructure project" 
                   class="w-full h-64 object-cover">
              <div class="p-6">
                <h3 class="text-xl font-bold mb-2">Infrastructure</h3>
                <p class="text-gray-600">Building the foundation of progress</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <!-- Services Section -->
      <section class="py-16">
        <div class="container mx-auto px-4">
          <h2 class="text-3xl font-bold text-center mb-12">Our Services</h2>
          <div class="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div class="text-center">
              <div class="bg-blue-100 rounded-full p-6 w-20 h-20 mx-auto mb-4 flex items-center justify-center">
                <span class="text-2xl">🏗️</span>
              </div>
              <h3 class="text-xl font-bold mb-2">Construction</h3>
              <p class="text-gray-600">Full-service construction solutions</p>
            </div>
            <div class="text-center">
              <div class="bg-blue-100 rounded-full p-6 w-20 h-20 mx-auto mb-4 flex items-center justify-center">
                <span class="text-2xl">🏢</span>
              </div>
              <h3 class="text-xl font-bold mb-2">Real Estate</h3>
              <p class="text-gray-600">Property development and sales</p>
            </div>
            <div class="text-center">
              <div class="bg-blue-100 rounded-full p-6 w-20 h-20 mx-auto mb-4 flex items-center justify-center">
                <span class="text-2xl">📐</span>
              </div>
              <h3 class="text-xl font-bold mb-2">Architecture</h3>
              <p class="text-gray-600">Innovative design solutions</p>
            </div>
            <div class="text-center">
              <div class="bg-blue-100 rounded-full p-6 w-20 h-20 mx-auto mb-4 flex items-center justify-center">
                <span class="text-2xl">🔧</span>
              </div>
              <h3 class="text-xl font-bold mb-2">Renovation</h3>
              <p class="text-gray-600">Complete renovation services</p>
            </div>
          </div>
        </div>
      </section>

      <!-- Contact Section -->
      <section class="py-16 bg-gray-100">
        <div class="container mx-auto px-4">
          <h2 class="text-3xl font-bold text-center mb-12">Contact Us</h2>
          
          <div class="grid grid-cols-1 md:grid-cols-2 gap-12">
            <!-- Contact Form -->
            <div class="bg-white p-8 rounded-lg shadow-lg">
              <h3 class="text-2xl font-bold mb-6">Send us a message</h3>
              <form [formGroup]="contactForm" (ngSubmit)="onSubmit()" class="space-y-6">
                <div>
                  <label for="name" class="block text-sm font-medium text-gray-700 mb-1">Name</label>
                  <input type="text" 
                         id="name" 
                         formControlName="name"
                         class="w-full px-4 py-2 border rounded-md focus:ring-blue-500 focus:border-blue-500">
                </div>
                
                <div>
                  <label for="email" class="block text-sm font-medium text-gray-700 mb-1">Email</label>
                  <input type="email" 
                         id="email" 
                         formControlName="email"
                         class="w-full px-4 py-2 border rounded-md focus:ring-blue-500 focus:border-blue-500">
                </div>
                
                <div>
                  <label for="phone" class="block text-sm font-medium text-gray-700 mb-1">Phone</label>
                  <input type="tel" 
                         id="phone" 
                         formControlName="phone"
                         class="w-full px-4 py-2 border rounded-md focus:ring-blue-500 focus:border-blue-500">
                </div>
                
                <div>
                  <label for="message" class="block text-sm font-medium text-gray-700 mb-1">Message</label>
                  <textarea id="message" 
                            formControlName="message"
                            rows="4"
                            class="w-full px-4 py-2 border rounded-md focus:ring-blue-500 focus:border-blue-500"></textarea>
                </div>
                
                <button type="submit" 
                        [disabled]="!contactForm.valid"
                        class="w-full bg-blue-600 text-white py-2 px-4 rounded-md hover:bg-blue-700 disabled:bg-gray-400">
                  Send Message
                </button>
              </form>
            </div>
            
            <!-- Contact Information -->
            <div class="bg-white p-8 rounded-lg shadow-lg">
              <h3 class="text-2xl font-bold mb-6">Our Office</h3>
              <div class="space-y-4">
                <div>
                  <h4 class="font-bold">Address</h4>
                  <p>Royal Castle appartment</p>
                  <p>Flat No 402 1st Busstop ,P M Palem, Madhurwada 530041</p>
                </div>
                <div>
                  <h4 class="font-bold">Phone</h4>
                  <p> +91 9390818231</p>
                </div>
                <div>
                  <h4 class="font-bold">Email</h4>
                  <p>udayrebel1994&#64;gmail.com</p>

                </div>
                <div>
                  <h4 class="font-bold">Business Hours</h4>
                  <p>Monday - Friday: 9:00 AM - 6:00 PM</p>
                  <p>Saturday: 10:00 AM - 4:00 PM</p>
                  <p>Sunday: Closed</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>

    <!-- Footer -->
    <footer class="bg-gray-800 text-white py-8">
      <div class="container mx-auto px-4">
        <div class="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <h3 class="text-xl font-bold mb-4">Varrahi Construction</h3>
            <p>Building dreams into reality</p>
          </div>
          <div>
            <h3 class="text-xl font-bold mb-4">Contact</h3>
            <p>Email: udayrebel1994&#64;gmail.com</p>

            <p>Phone: +91  9390818231</p>
          </div>
          <div>
            <h3 class="text-xl font-bold mb-4">Address</h3>
                  <p>Royal Castle appartment</p>
                  <p>Flat No 402 1st Busstop ,P M Palem, Madhurwada 530041</p>
          </div>
        </div>
        <div class="text-center mt-8">
          <p>&copy; 2024 Varrahi Construction. All rights reserved.</p>
        </div>
      </div>
    </footer>
  `,
  styles: [`
    :host {
      display: block;
      min-height: 100vh;
    }
  `]
})
export class AppComponent {
  title = 'varrahi';
  contactForm: FormGroup;

  constructor(private fb: FormBuilder) {
    this.contactForm = this.fb.group({
      name: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      phone: ['', Validators.required],
      message: ['', Validators.required]
    });
  }

  onSubmit() {
    if (this.contactForm.valid) {
      console.log('Form submitted:', this.contactForm.value);
      this.contactForm.reset();
    }
  }
}