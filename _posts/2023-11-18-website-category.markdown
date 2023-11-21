---
layout: blog-post
author: Ahmed Sharif Khan

author_name: Jane Doe
username: ahmed
author_bio: Web Developer and Blogger
author_email: jane.doe@email.com
author_avatar: /assets/authors/author.png
author_social:
title:  "Website Category in the Jekyll Website"
date:   2023-11-20 5:35:09 +0600
categories: [Jekyll, Code, Website]
keywords: Jekyll  Code Website
description:  Website Category in the Jekyll Website Website Category in the Jekyll Website
image: "https://tds-images.thedailystar.net/sites/default/files/styles/big_202/public/images/2023/11/20/dalle_2023-11-20_22.53.01_-_a_landscape-oriented_close-up_dramatic_image_showing_the_backs_of_a_diverse_group_of_employees_in_silhouette_protesting_outside_an_office_building.png"
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

