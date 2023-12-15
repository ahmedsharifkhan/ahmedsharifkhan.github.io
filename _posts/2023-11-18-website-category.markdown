---
layout: blog-post

title:  "Website Category in the Jekyll Website"
date:   2023-11-20 5:35:09 +0600
categories: [Jekyll, Code, Website]
keywords: Jekyll  Code Website
description:  Website Category in the Jekyll Website Website Category in the Jekyll Website
image: "https://tds-images.thedailystar.net/sites/default/files/styles/big_202/public/images/2023/11/20/dalle_2023-11-20_22.53.01_-_a_landscape-oriented_close-up_dramatic_image_showing_the_backs_of_a_diverse_group_of_employees_in_silhouette_protesting_outside_an_office_building.png"

team:
  name: Ahmed Sharif Khan Noor
  tag: Chief Editor / Blogger
  subtitle: Digital Marketer and Social Media Manager
  username: ahmed_sharif_khan
  permalink: ahmed-sharif-khan
  date: 2023-10-12 17:35:09 +0600
  message: |
        There live the blind texts. Separated they live in Bookmarksgrove right at the coast of the Semantics, a large language ocean.
  image: https://lh3.googleusercontent.com/pw/ADCreHd8bz4D53_B3dnZqgyI6lKQ8guUguy3xrJpukvzeMa3s2Ea1-4FSCoAB4TGGJ2PVh2VWacgpBdyAP6Lm4xdU1Stdff6PvXlO5Uuko9dsEGh5mkNBPhAJmeAhpWyOJlzRjv5Ahag3bBo7RBfa4o1UfD6=w480-h480-s-no-gm?authuser=0
  categories: [Graphic Design, Photoshop, Adobe Photoshop, Social Media Banner Design]

social_media:
  - name: facebook
    username: https://www.facebook.com/ahmedsharifkhannoor
  - name: twitter
    username: https://www.twitter.com/maxnoor87
  - name: instagram
    username: https://www.instagram.com/ahmedsharifkhannoor
  - name: linkedin
    username: https://www.linkedin.com/in/ahmedsharifkhannoor
  - name: behance
    username: https://www.behance.net/ahmedsharifkhannoor
  - name: dribble
    username: https://dribble.com/ahmedsharifkhannoor
  - name: pinterest
    username: https://ar.pinterest.com/ahmedsharifkhannoor
  - name: web
    username: https://ahmedsharifkhannoor.blogspot.com
  - name: globe
    username: https://designtgg.blogspot.com/
  - name: person
    username: https://bio.site/ahmedsharifkhannoor
  - name: whatshot
    username: https://www.threads.net/@ahmedsharifkhannoor
  - name: github
    username: https://www.github.com/ahmedsharifkhan
  - name: threads
    username: https://www.threads.net/@ahmedsharifkhannoor
  - name: youtube-play
    username: https://www.youtube.com/channel/UCBfIS1RdIpSoS1e75LXJuxw
---

##### postbox dot html

```
<!-- begin post -->
{% assign author = site.authors[post.author] %}
<div class="card">
    <a href="{{ post.url | absolute_url }}">
        {% if post.image %} <img class="rounded mb-4" src="{{ post.image }}" alt="{{ post.title }}"> {% endif %}
    </a>
    <div class="card-block">
        <h2 class="card-title h4 serif-font"><a href="{{ post.url | absolute_url }}">{{ post.title | truncate: 50}}</a></h2>
        <p class="card-text text-muted">{{ post.description | strip_html | truncatewords:15 }}</p>
        <div class="metafooter">
            <div class="wrapfooter small d-flex align-items-center">
                <span class="author-meta">
                By  <span class="post-name"> {% if post.author %}{{ author.display_name }}{% else %}{{ site.author }}{% endif %}, </span>             
                on <span class="post-date">{{ post.date | date_to_string }}</span>
                </span>               
                <div class="clearfix"></div>
            </div>
        </div>
    </div>
</div>
<!-- end post -->
```

##### categories . html

front matter

```
title: "Categories"
layout: default
permalink: "/categories.html"
```

body code 

