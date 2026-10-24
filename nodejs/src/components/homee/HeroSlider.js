"use client";

import { useState, useEffect, useCallback, useRef } from "react";
import Image from "next/image";
import "./HeroSlider.css";

const slidesData = [
  {
    id: 1,
    tag: "ENT Excellence · 25+ Yrs Experience",
    title: "Best ENT Specialist & Surgeon in Delhi",
    desc: "Advanced diagnosis and compassionate surgical care for ear, nose, throat, head & neck disorders. Trusted by 50,000+ patients.",
    img: "/images/banner/dr-kushwah-banner.png",
    alt: "Dr. (Prof.) Dhirendra Singh Kushwah - Best ENT Specialist and Surgeon in Delhi"
  },
  {
    id: 2,
    tag: "Painless Rhinoplasty & Septoplasty",
    title: "Pioneer in Packless Sinus & Nose Surgery",
    desc: "Advanced minimally invasive and endoscopic procedures with fastest recovery. No painful nasal packing required.",
    img: "/images/banner/breathe-banner.png",
    alt: "Minimally Invasive Packless Sinus and Septoplasty Surgery Delhi"
  },
  {
    id: 3,
    tag: "Bionic Hearing & Microsurgery",
    title: "Advanced Hearing & Cochlear Implant Center",
    desc: "Restoring sound for children and adults. Stitchless tympanoplasty, stapedotomy, and advanced cochlear implantation.",
    img: "/images/banner/throat-banner.png",
    alt: "Advanced Hearing Restoration and Cochlear Implants Center Delhi"
  },
  {
    id: 4,
    tag: "Specialized Voice & Airway Clinic",
    title: "Comprehensive Voice & Swallowing Care",
    desc: "High-precision laryngology, coblation tonsillectomy, and sleep apnea (OSA) solutions for lasting relief.",
    img: "/images/banner/hearing-banner.png",
    alt: "Voice and Swallowing Disorder Clinic South Delhi"
  }
];

const AUTO_DELAY = 4500;
const LEAVE_DURATION = 320;
const ENTER_DURATION = 480;

export default function HeroSlider() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [animating, setAnimating] = useState(false);
  const [isEntering, setIsEntering] = useState(false);
  const [isLeaving, setIsLeaving] = useState(false);

  const currentIndexRef = useRef(0);
  const animatingRef = useRef(false);
  const intervalRef = useRef(null);
  const progressBarRef = useRef(null);
  const isPausedRef = useRef(false);
  const transitionTimeoutsRef = useRef([]);

  // Touch swipe support for mobile
  const touchStartX = useRef(0);
  const touchEndX = useRef(0);

  const totalSlides = slidesData.length;

  useEffect(() => {
    currentIndexRef.current = currentIndex;
  }, [currentIndex]);

  const resetProgress = useCallback(() => {
    const bar = progressBarRef.current;
    if (!bar) return;
    bar.style.transition = "none";
    bar.style.width = "0%";
    void bar.offsetWidth;
    bar.style.transition = `width ${AUTO_DELAY}ms linear`;
    bar.style.width = "100%";
  }, []);

  const pauseProgress = useCallback(() => {
    const bar = progressBarRef.current;
    if (!bar) return;
    const computed = getComputedStyle(bar).width;
    bar.style.transition = "none";
    bar.style.width = computed;
  }, []);

  const goToSlide = useCallback((nextIndex) => {
    if (animatingRef.current) return;
    if (nextIndex === currentIndexRef.current) return;

    animatingRef.current = true;
    setAnimating(true);
    setIsLeaving(true);
    setIsEntering(false);

    const t1 = setTimeout(() => {
      setCurrentIndex(nextIndex);
      currentIndexRef.current = nextIndex;
      setIsLeaving(false);
      setIsEntering(true);

      const t2 = setTimeout(() => {
        setIsEntering(false);
        animatingRef.current = false;
        setAnimating(false);
      }, ENTER_DURATION);

      transitionTimeoutsRef.current.push(t2);
    }, LEAVE_DURATION);

    transitionTimeoutsRef.current.push(t1);
  }, []);

  const stopAutoPlay = useCallback(() => {
    if (intervalRef.current) {
      clearInterval(intervalRef.current);
      intervalRef.current = null;
    }
  }, []);

  const startAutoPlay = useCallback(() => {
    stopAutoPlay();
    if (isPausedRef.current) return;
    resetProgress();
    intervalRef.current = setInterval(() => {
      const next = (currentIndexRef.current + 1) % totalSlides;
      goToSlide(next);
    }, AUTO_DELAY);
  }, [stopAutoPlay, resetProgress, goToSlide, totalSlides]);

  const goToPrev = useCallback(() => {
    const prev = (currentIndexRef.current - 1 + totalSlides) % totalSlides;
    goToSlide(prev);
    stopAutoPlay();
    const t = setTimeout(() => startAutoPlay(), LEAVE_DURATION + ENTER_DURATION + 50);
    transitionTimeoutsRef.current.push(t);
  }, [goToSlide, stopAutoPlay, startAutoPlay, totalSlides]);

  const goToNext = useCallback(() => {
    const next = (currentIndexRef.current + 1) % totalSlides;
    goToSlide(next);
    stopAutoPlay();
    const t = setTimeout(() => startAutoPlay(), LEAVE_DURATION + ENTER_DURATION + 50);
    transitionTimeoutsRef.current.push(t);
  }, [goToSlide, stopAutoPlay, startAutoPlay, totalSlides]);

  const goToDot = useCallback((idx) => {
    if (idx === currentIndexRef.current) return;
    goToSlide(idx);
    stopAutoPlay();
    const t = setTimeout(() => startAutoPlay(), LEAVE_DURATION + ENTER_DURATION + 50);
    transitionTimeoutsRef.current.push(t);
  }, [goToSlide, stopAutoPlay, startAutoPlay]);

  const handleMouseEnter = useCallback(() => {
    isPausedRef.current = true;
    stopAutoPlay();
    pauseProgress();
  }, [stopAutoPlay, pauseProgress]);

  const handleMouseLeave = useCallback(() => {
    isPausedRef.current = false;
    startAutoPlay();
  }, [startAutoPlay]);

  // Touch gesture handlers for mobile
  const handleTouchStart = (e) => {
    touchStartX.current = e.touches[0].clientX;
  };

  const handleTouchMove = (e) => {
    touchEndX.current = e.touches[0].clientX;
  };

  const handleTouchEnd = () => {
    if (!touchStartX.current || !touchEndX.current) return;
    const diff = touchStartX.current - touchEndX.current;
    if (Math.abs(diff) > 45) {
      if (diff > 0) {
        goToNext();
      } else {
        goToPrev();
      }
    }
    touchStartX.current = 0;
    touchEndX.current = 0;
  };

  useEffect(() => {
    startAutoPlay();
    return () => {
      stopAutoPlay();
      transitionTimeoutsRef.current.forEach(clearTimeout);
      transitionTimeoutsRef.current = [];
    };
  }, [startAutoPlay, stopAutoPlay]);

  const currentSlide = slidesData[currentIndex];

  return (
    <div
      className="hero-slider-shell w-full relative"
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      onTouchStart={handleTouchStart}
      onTouchMove={handleTouchMove}
      onTouchEnd={handleTouchEnd}
      aria-label="Clinical Highlights Carousel"
    >
      <div className="carousel-root w-full h-full relative overflow-hidden">
        {/* Active Banner Image */}
        <img
          src={currentSlide.img}
          alt={currentSlide.alt}
          className={`bg-image ${isLeaving ? "leaving" : ""} ${isEntering ? "entering" : ""}`}
        />

        {/* Navigation Arrow Controls */}
        <div className="nav-btns-wrapper">
          <button
            className="nav-btn nav-btn-prev"
            onClick={goToPrev}
            aria-label="Previous slide"
            disabled={animating}
          >
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
              <polyline points="15 18 9 12 15 6" />
            </svg>
          </button>
          <button
            className="nav-btn nav-btn-next"
            onClick={goToNext}
            aria-label="Next slide"
            disabled={animating}
          >
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
              <polyline points="9 6 15 12 9 18" />
            </svg>
          </button>
        </div>

        {/* Pagination Dots */}
        <div className="slider-dots-container" role="tablist" aria-label="Slide Selector">
          {slidesData.map((s, idx) => (
            <button
              key={s.id}
              onClick={() => goToDot(idx)}
              className={`slider-dot ${idx === currentIndex ? "active" : ""}`}
              aria-label={`Go to slide ${idx + 1}: ${s.title}`}
              aria-selected={idx === currentIndex}
              role="tab"
            />
          ))}
        </div>

        {/* Smooth Autoplay Progress bar */}
        <div className="progress-bar" ref={progressBarRef} />
      </div>
    </div>
  );
}
