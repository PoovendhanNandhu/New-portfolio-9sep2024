import React, { useState, useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Scrollbar, Mousewheel } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/scrollbar';
import "./Cards.css"

const Projects = () => {
  const [visiblePostActions, setVisiblePostActions] = useState({});
  const [likedPosts, setLikedPosts] = useState({});
  const containerRef = useRef(null);

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (containerRef.current && !containerRef.current.contains(event.target)) {
        setVisiblePostActions({});
      }
    };

    document.addEventListener('click', handleClickOutside);
    return () => {
      document.removeEventListener('click', handleClickOutside);
    };
  }, []);

  const togglePostActions = (postId, event) => {
    event.stopPropagation();
    setVisiblePostActions(prev => ({
      ...prev,
      [postId]: !prev[postId]
    }));
  };

  const toggleLike = (postId) => {
    setLikedPosts(prev => ({
      ...prev,
      [postId]: !prev[postId]
    }));
  };

  const dessertPosts = [
    { id: 'post1', name: 'SecurityGPT-v0',  img: 'https://camo.githubusercontent.com/43bd4c1e7c21942907df54453afde3b7987c6178f285e9302f9d29a1388cefee/68747470733a2f2f692e706f7374696d672e63632f32533674566273532f736563757269747961692d30322e706e67', avatar: 'https://github.com/ecemgo/mini-samples-great-tricks/assets/13468728/f9d29d0e-f03b-4990-9bc5-ade57a276b41', projectLink: 'https://github.com/PoovendhanNandhu/SecurityGPT-v0', githubLink: 'https://github.com/PoovendhanNandhu/SecurityGPT-v0' },
    { id: 'post2', name: 'WritersAI',  img: 'https://i.postimg.cc/qMH3Cp8y/svgviewer-png-output.png', avatar: 'https://github.com/ecemgo/mini-samples-great-tricks/assets/13468728/3c7b6ef9-cd2d-4d70-819a-2aa9c2309083', projectLink: 'https://github.com/PoovendhanNandhu/WritersAI', githubLink: 'https://github.com/PoovendhanNandhu/WritersAI' },
    { id: 'post3', name: ' Agri-Model',  img: 'https://i.postimg.cc/RZVQNMBG/10466569-c74f-4264-a5db-efdc0619cde6.webp', avatar: 'https://github.com/ecemgo/mini-samples-great-tricks/assets/13468728/3c7b6ef9-cd2d-4d70-819a-2aa9c2309083', projectLink: 'https://github.com/PoovendhanNandhu/Agri-Model', githubLink: 'https://github.com/PoovendhanNandhu/Agri-Model' },
    { id: 'post4', name: ' FAKE-NEWS-ML-MODEL ',  img: 'https://i.postimg.cc/9MMQ7nf6/image.png', avatar: 'https://github.com/ecemgo/mini-samples-great-tricks/assets/13468728/3c7b6ef9-cd2d-4d70-819a-2aa9c2309083', projectLink: 'https://github.com/PoovendhanNandhu/FAKE-NEWS-ML-MODEL', githubLink: 'https://github.com/PoovendhanNandhu/FAKE-NEWS-ML-MODEL' },
    { id: 'post5', name: 'Dragron_Adventure',  img: 'https://i.postimg.cc/Sxn0cbL7/image.png', avatar: 'https://github.com/ecemgo/mini-samples-great-tricks/assets/13468728/3c7b6ef9-cd2d-4d70-819a-2aa9c2309083', projectLink: 'https://github.com/PoovendhanNandhu/Dragron_Adventure', githubLink: 'https://github.com/PoovendhanNandhu/Dragron_Adventure' },
   
    // Add the rest of the posts here with projectLink and githubLink
  ];

  return (
    <div ref={containerRef} className="recipe-container">
      <h1>The Projects</h1>
      <Swiper
        modules={[Scrollbar, Mousewheel]}
        grabCursor={true}
        speed={200}
        mousewheel={{ invert: false }}
        scrollbar={{ draggable: true }}
        slidesPerView={1}
        spaceBetween={10}
        breakpoints={{
          900: { slidesPerView: 2, spaceBetween: 20 },
          1200: { slidesPerView: 3, spaceBetween: 20 },
        }}
      >
        {dessertPosts.map((post) => (
          <SwiperSlide key={post.id} className="post">
            <img className="post-img" src={post.img} alt="recipe" />
            <div className="post-body">
              <img className="post-avatar" src={post.avatar} alt="avatar" />
              <div className="post-detail">
                <h2 className="post-name">
                  <Link to={post.projectLink} target='_blank'>{post.name}</Link>
                </h2>
                {/* <p className="post-author">
                  <a href={post.githubLink} target="_blank" rel="noopener noreferrer">{post.author}</a>
                </p> */}
              </div>
              <div className="post-actions">
                <button
                  className={`post-like ${likedPosts[post.id] ? 'active' : ''}`}
                  onClick={() => toggleLike(post.id)}
                >
                  <i className="fas fa-heart"></i>
                </button>
                <button
                  className="post-actions-controller"
                  onClick={(e) => togglePostActions(post.id, e)}
                  aria-controls="post-actions-content"
                  aria-expanded={visiblePostActions[post.id] ? 'true' : 'false'}
                >
                  <i className="fa-solid fa-ellipsis fa-2xl"></i>
                </button>
                {visiblePostActions[post.id] && (
                  <div className="post-actions-content" aria-hidden="false">
                    <ul role="list" className="grid-flow" data-spacing="small">
                      <li>
                        <button className="post-actions-link">
                          <i className="fa-solid fa-folder-open"></i>
                          <span>Add to Collection</span>
                        </button>
                      </li>
                      <li>
                        <Link to={post.projectLink} className="post-actions-link">
                          <i className="fa-solid fa-eye"></i>
                          <span>Show the Project</span>
                        </Link>
                      </li>
                      <li>
                        <a href={post.githubLink} target="_blank" rel="noopener noreferrer" className="post-actions-link">
                          <i className="fa-solid fa-user-plus"></i>
                          <span>Follow on GitHub</span>
                        </a>
                      </li>
                    </ul>
                  </div>
                )}
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default Projects;

