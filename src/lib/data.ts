import type { Service, Testimonial, BlogPost } from '@/lib/types';
import { Stethoscope, Users, HeartPulse, Baby, ShieldPlus } from 'lucide-react';

export const SERVICES_DATA: Service[] = [
  {
    slug: 'initial-homeopathic-consultation',
    title: 'Initial Homeopathic Consultation',
    description: 'A comprehensive assessment to understand your health concerns and goals, leading to a personalized treatment approach.',
    longDescription: 'Our initial consultation involves a deep dive into your health history, current symptoms, lifestyle, and emotional well-being. This holistic approach allows Dr. Monica to create a tailored homeopathic treatment plan designed specifically for you. Expect a duration of 60-90 minutes.',
    image: 'https://placehold.co/600x400.png',
    dataAiHint: 'consultation medical',
    icon: Stethoscope,
    keywords: ['initial consultation', 'homeopathy assessment', 'personalized treatment plan'],
  },
  {
    slug: 'follow-up-sessions',
    title: 'Follow-Up Sessions',
    description: 'Regular follow-up appointments to monitor progress, adjust remedies, and provide ongoing support on your healing journey.',
    longDescription: 'Follow-up sessions are crucial for tracking your progress and making any necessary adjustments to your treatment plan. Dr. Monica provides continuous support and guidance to ensure optimal results. These sessions typically last 30-45 minutes.',
    image: 'https://placehold.co/600x400.png',
    dataAiHint: 'medical progress',
    icon: Users, // Represents ongoing relationship
    keywords: ['homeopathy follow-up', 'treatment monitoring', 'health progress'],
  },
  {
    slug: 'acute-condition-care',
    title: 'Acute Condition Care',
    description: 'Effective and natural relief for acute ailments such as colds, flu, fevers, injuries, and infections.',
    longDescription: 'Homeopathy offers gentle yet powerful solutions for acute conditions, helping your body to recover quickly and naturally without harsh side effects. Ideal for seasonal illnesses, minor injuries, and sudden onsets of symptoms.',
    image: 'https://placehold.co/600x400.png',
    dataAiHint: 'sickness remedy',
    icon: ShieldPlus,
    keywords: ['acute illness homeopathy', 'natural cold relief', 'flu treatment'],
  },
  {
    slug: 'chronic-disease-management',
    title: 'Chronic Disease Management',
    description: 'Holistic support for managing chronic conditions like allergies, asthma, skin disorders, digestive issues, and more.',
    longDescription: 'Dr. Monica specializes in a constitutional approach to chronic diseases, aiming to address the root cause rather than just managing symptoms. This leads to long-term improvements in health and vitality.',
    image: 'https://placehold.co/600x400.png',
    dataAiHint: 'health management',
    icon: HeartPulse,
    keywords: ['chronic disease homeopathy', 'holistic allergy treatment', 'natural eczema care'],
  },
  {
    slug: 'child-and-family-wellness',
    title: 'Child & Family Wellness',
    description: 'Gentle and safe homeopathic care for children of all ages, supporting their growth, development, and overall well-being.',
    longDescription: 'Homeopathy is an excellent choice for children, offering safe and effective treatments for common childhood ailments, behavioral issues, and developmental support. Dr. Monica also provides wellness strategies for the whole family.',
    image: 'https://placehold.co/600x400.png',
    dataAiHint: 'family children',
    icon: Baby,
    keywords: ['pediatric homeopathy', 'childrens health', 'family naturopathy'],
  },
];

export const TESTIMONIALS_DATA: Testimonial[] = [
  {
    id: '1',
    quote: "Dr. Monica's approach to homeopathy is truly transformative. My chronic migraines have significantly reduced, and I feel more energetic than ever.",
    author: 'Aisha K.',
    location: 'New York, USA',
    date: 'March 2024',
  },
  {
    id: '2',
    quote: 'I was skeptical about homeopathy at first, but Dr. Monica explained everything so clearly and the results for my son\'s eczema have been amazing. Highly recommend!',
    author: 'Rajesh P.',
    location: 'Mumbai, India',
    date: 'January 2024',
  },
  {
    id: '3',
    quote: 'The AI treatment tool gave me some great initial insights, and my consultation with Dr. Monica confirmed the path forward. I appreciate the blend of technology and personal care.',
    author: 'Sarah L.',
    location: 'California, USA',
    date: 'April 2024',
  },
  {
    id: '4',
    quote: 'After years of struggling with digestive issues, homeopathy under Dr. Monica\'s guidance has brought me immense relief. I feel like I have my life back.',
    author: 'Priya S.',
    location: 'Bangalore, India',
    date: 'February 2024',
  },
];

export const BLOG_POSTS_DATA: BlogPost[] = [
  {
    slug: 'understanding-homeopathy-a-gentle-path-to-healing',
    title: 'Understanding Homeopathy: A Gentle Path to Healing',
    date: '2024-05-15',
    author: 'Dr. Monica',
    excerpt: 'Explore the core principles of homeopathy and how it offers a natural, holistic approach to health and wellness for individuals in the US and India.',
    content: '<p>Homeopathy is a system of natural healthcare that has been in worldwide use for over 200 years. It is based on the principle of "like cures like" - that is, a substance that can cause symptoms in a healthy person can be used in diluted form to treat similar symptoms in an ill person. Homeopathic remedies are prepared from natural sources (plant, mineral, or animal) and are used in minute doses, making them safe and free from harmful side-effects.</p><p>This post delves into the history, philosophy, and scientific understanding behind homeopathy, addressing common misconceptions and highlighting its benefits for a wide range of conditions. We will also discuss its relevance and growing popularity in both the United States and India, where traditional and natural healing methods are highly valued.</p>',
    image: 'https://placehold.co/800x400.png',
    dataAiHint: 'healing nature',
    keywords: ['homeopathy principles', 'natural healing', 'holistic medicine', 'US homeopathy', 'India homeopathy'],
  },
  {
    slug: 'boosting-your-immunity-naturally-tips-for-us-and-indian-lifestyles',
    title: 'Boosting Your Immunity Naturally: Tips for US and Indian Lifestyles',
    date: '2024-04-28',
    author: 'Dr. Monica',
    excerpt: 'Learn practical, natural ways to strengthen your immune system, with tips tailored for both US and Indian environments and dietary habits.',
    content: '<p>A strong immune system is your body\'s best defense against illness. While modern life in both the US and India presents unique challenges to our immunity, nature provides us with powerful tools to stay resilient. This article covers key lifestyle adjustments, dietary recommendations, and specific homeopathic remedies that can help bolster your immune function.</p><p>We\'ll explore topics such as stress management, sleep hygiene, beneficial herbs and foods common in both American and Indian cuisines, and how homeopathic constitutional treatment can play a role in long-term immune health.</p>',
    image: 'https://placehold.co/800x400.png',
    dataAiHint: 'healthy food',
    keywords: ['immune system', 'natural immunity boosters', 'homeopathic immunity', 'wellness tips US', 'health tips India'],
  },
  {
    slug: 'navigating-seasonal-changes-a-homeopathic-guide',
    title: 'Navigating Seasonal Changes: A Homeopathic Guide',
    date: '2024-06-01',
    author: 'Dr. Monica',
    excerpt: 'Seasonal transitions can affect our health. Discover homeopathic strategies to stay balanced and healthy throughout the year, applicable to diverse climates.',
    content: '<p>As seasons change, so do the challenges to our well-being. From spring allergies to winter colds, homeopathy offers effective ways to adapt and thrive. This guide provides insights into common seasonal ailments and suggests homeopathic remedies and preventative measures. We will consider the varied climates experienced by patients in the USA and India, offering tailored advice.</p><p>Topics include managing allergies, preventing common colds and flu, and supporting your body during extreme weather conditions through natural homeopathic approaches.</p>',
    image: 'https://placehold.co/800x400.png',
    dataAiHint: 'seasons nature',
    keywords: ['seasonal health', 'homeopathy for allergies', 'winter wellness', 'summer health', 'homeopathic remedies'],
  },
];
