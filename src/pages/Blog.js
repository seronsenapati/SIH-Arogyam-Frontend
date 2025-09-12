import React, { useState } from 'react';
import styled from 'styled-components';

const Blog = () => {
  const [searchTerm, setSearchTerm] = useState('');
  
  // Sample blog posts data
  const blogPosts = [
    {
      id: 1,
      title: "Understanding Your Dosha: A Guide to Vata, Pitta, and Kapha",
      excerpt: "Discover how the three doshas influence your physical and mental characteristics, and learn how to balance them for optimal health.",
      author: "Dr. Ayurveda",
      date: "March 15, 2024",
      tags: ["Dosha", "Balance", "Wellness"],
      image: "https://images.unsplash.com/photo-1542736667-069246bdbc6d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1200&q=80"
    },
    {
      id: 2,
      title: "The Healing Power of Turmeric in Ayurveda",
      excerpt: "Explore the ancient uses of turmeric in Ayurvedic medicine and its modern scientific validation for anti-inflammatory and antioxidant properties.",
      author: "Dr. Sharma",
      date: "February 28, 2024",
      tags: ["Herbs", "Turmeric", "Medicine"],
      image: "https://images.unsplash.com/photo-1597429676720-5b4c4e6a8de5?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1200&q=80"
    },
    {
      id: 3,
      title: "Seasonal Eating According to Ayurveda",
      excerpt: "Learn how to adjust your diet according to the seasons to maintain balance and prevent disease as per Ayurvedic principles.",
      author: "Dr. Patel",
      date: "February 10, 2024",
      tags: ["Diet", "Seasons", "Nutrition"],
      image: "https://images.unsplash.com/photo-1493770348161-369560ae357d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1200&q=80"
    },
    {
      id: 4,
      title: "Ayurvedic Morning Routine for Optimal Health",
      excerpt: "Start your day with these ancient Ayurvedic practices that promote physical vitality, mental clarity, and spiritual well-being.",
      author: "Dr. Gupta",
      date: "January 22, 2024",
      tags: ["Routine", "Morning", "Lifestyle"],
      image: "https://images.unsplash.com/photo-1505576399279-565b52d4ac71?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1200&q=80"
    }
  ];

  const filteredPosts = blogPosts.filter(post => 
    post.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
    post.excerpt.toLowerCase().includes(searchTerm.toLowerCase()) ||
    post.tags.some(tag => tag.toLowerCase().includes(searchTerm.toLowerCase()))
  );

  return (
    <BlogContainer>
      <PageHeader>
        <Title>Ayurvedic Wisdom Blog</Title>
        <Subtitle>Discover ancient healing knowledge for modern wellness</Subtitle>
      </PageHeader>
      
      <SearchSection>
        <SearchInput 
          type="text" 
          placeholder="Search articles..." 
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          className="glassmorphism"
        />
      </SearchSection>
      
      <BlogGrid>
        {filteredPosts.map(post => (
          <BlogCard key={post.id} className="glassmorphism">
            <BlogImage src={post.image} alt={post.title} />
            <BlogContent>
              <BlogTags>
                {post.tags.map(tag => (
                  <Tag key={tag}>{tag}</Tag>
                ))}
              </BlogTags>
              <BlogTitle>{post.title}</BlogTitle>
              <BlogExcerpt>{post.excerpt}</BlogExcerpt>
              <BlogMeta>
                <Author>By {post.author}</Author>
                <Date>{post.date}</Date>
              </BlogMeta>
              <ReadMoreButton className="rounded-button secondary">
                Read More
              </ReadMoreButton>
            </BlogContent>
          </BlogCard>
        ))}
      </BlogGrid>
    </BlogContainer>
  );
};

export default Blog;

const BlogContainer = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  padding: 20px;
`;

const PageHeader = styled.div`
  text-align: center;
  margin-bottom: 40px;
`;

const Title = styled.h1`
  font-family: 'Playfair Display', serif;
  font-size: 3rem;
  color: var(--dark-green);
  margin-bottom: 15px;
`;

const Subtitle = styled.p`
  font-size: 1.2rem;
  color: var(--text-dark);
  max-width: 800px;
  margin: 0 auto;
`;

const SearchSection = styled.div`
  margin-bottom: 40px;
  text-align: center;
`;

const SearchInput = styled.input`
  width: 100%;
  max-width: 500px;
  padding: 15px 20px;
  font-size: 1rem;
  border: none;
  outline: none;
  border-radius: 50px;
`;

const BlogGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(350px, 1fr));
  gap: 30px;
`;

const BlogCard = styled.div`
  overflow: hidden;
  transition: transform 0.3s ease;
  
  &:hover {
    transform: translateY(-10px);
  }
`;

const BlogImage = styled.img`
  width: 100%;
  height: 250px;
  object-fit: cover;
`;

const BlogContent = styled.div`
  padding: 25px;
`;

const BlogTags = styled.div`
  display: flex;
  gap: 10px;
  margin-bottom: 15px;
`;

const Tag = styled.span`
  background: var(--light-green);
  color: var(--dark-green);
  padding: 5px 10px;
  border-radius: 20px;
  font-size: 0.8rem;
  font-weight: 500;
`;

const BlogTitle = styled.h3`
  font-size: 1.5rem;
  margin-bottom: 15px;
  color: var(--dark-green);
`;

const BlogExcerpt = styled.p`
  font-size: 1rem;
  line-height: 1.6;
  color: var(--text-dark);
  margin-bottom: 20px;
`;

const BlogMeta = styled.div`
  display: flex;
  justify-content: space-between;
  margin-bottom: 20px;
`;

const Author = styled.span`
  font-weight: 500;
  color: var(--dark-green);
`;

const Date = styled.span`
  color: #666;
`;

const ReadMoreButton = styled.button`
  width: 100%;
`;