// import React from 'react'
import { Route, Routes } from 'react-router-dom'

// bài 10
import Index from './components/bai10/Index'
import About from './components/bai9/About'
import Contact from './components/bai9/Contact'
import Pricing from './components/bai10/Pricing'
import Services from './components/bai10/Services'
import Teashop from './components/bai10/Teashop'

// bài 11
import Index from './components/bai11/Index'
import About from './components/bai11/About'
import Contact from './components/bai11/Contact'
import Blog from './components/bai11/Blog'
import Repair from './components/bai11/Repair'


// bài 1 + 2
import Bai1Home from './components/bai1/Bai1Home'
import Bai1About from './components/bai1/Bai1About'
import Bai1Contact from './components/bai1/Bai1Contact'
import Navbar from './components/bai1/Navbar'

import Bai3Home from './components/bai3/Bai3Home'
import Footer from './components/bai3/Footer'
import Features from './components/bai3/Features'
import Hero from './components/bai3/Hero'
import Services from './components/bai3/Services'
import SpecialOffers from './components/bai3/SpecialOffers'
import Testimonials from './components/bai3/Testimonials'
import Index from './components/bai9/Index'
import File404 from './components/bai9/File404'
import About from './components/bai9/About'
import Contact from './components/bai9/Contact'
import Open from './components/bai9/Open'
import Price from './components/bai9/Price'
import Service from './components/bai9/Service'
import Team from './components/bai9/Team'
import Testimonial from './components/bai9/Testimonial'

export default function App() {
  return (
    <div>
      <Routes>
        {/* bài 1 + bài 2*/}
        <Route path='/' element={<Navbar></Navbar>}>
          <Route path='bai1Home' element={<Bai1Home></Bai1Home>} />
          <Route path='bai1About' element={<Bai1About></Bai1About>} />
          <Route path='bai1Contact' element={<Bai1Contact></Bai1Contact>} />
        </Route>

        {/* bài 3 */}
        <Route path="/" element={<Bai3Home></Bai3Home>}>
          <Route path='footer' element={<Footer></Footer>} />
          <Route path='features' element={<Features></Features>} />
          <Route path='hero' element={<Hero></Hero>} />
          <Route path='navbar' element={<Navbar></Navbar>} />
          <Route path='services' element={<Services></Services>} />
          <Route path='specialOffers' element={<SpecialOffers></SpecialOffers>} />
          <Route path='testimonials' element={<Testimonials></Testimonials>} />
        </Route>

        {/* bài 9 */}
        <Route path="/" element={<Index></Index>}>
          <Route path='about' element={<About></About>} />
          <Route path='contact' element={<Contact></Contact>} />
          <Route path='file404' element={<File404></File404>} />
          <Route path='open' element={<Open></Open>} />
          <Route path='price' element={<Price></Price>} />
          <Route path='service' element={<Service></Service>} />
          <Route path='team' element={<Team></Team>} />
          <Route path='testimonials' element={<Testimonial></Testimonial>} />
          <Route path="*" element={<File404></File404>} />
        </Route>

        {/* bài 10 */}
        <Route path="/" element={<Index></Index>}>
          <Route path='about' element={<About></About>} />
          <Route path='contact' element={<Contact></Contact>} />
          <Route path='pricing' element={<Pricing></Pricing>} />
          <Route path='services' element={<Services></Services>} />
          <Route path='teashop' element={<Teashop></Teashop>} />
        </Route>

        {/* bài 11 */}
        <Route path="/" element={<Index></Index>}>
          <Route path='about' element={<About></About>} />
          <Route path='contact' element={<Contact></Contact>} />
          <Route path='blog' element={<Blog></Blog>} />
          <Route path='repair' element={<Repair></Repair>} />
        </Route>
      </Routes>
    </div>
  )
}
