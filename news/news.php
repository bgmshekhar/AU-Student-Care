<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title><?php bloginfo('name'); ?> | <?php wp_title(); ?></title>
    <link rel="stylesheet" href="<?php bloginfo('stylesheet_url'); ?>">
    <?php wp_head(); ?>
</head>
<body>

<header>
    <div class="header-content">
        <div class="logo"><?php bloginfo('name'); ?></div>
        <div class="header-middle">
            <a href="<?php echo home_url(); ?>">Home</a>
            <a href="#">Study Material</a>
            <a href="#">Course Suggestions</a>
            <a href="#">Book Marketplace</a>
            <a href="<?php echo get_permalink(get_page_by_title('Contact')); ?>">Contact</a>
        </div>
        <div class="header-right">
            <form method="get" id="searchform" action="<?php echo esc_url(home_url('/')); ?>">
                <input type="text" name="s" placeholder="Search...">
                <button type="submit" class="search-icon">🔍</button>
            </form>
        </div>
    </div>
</header>

<main>
    <section class="news-section">
        <h1>Latest News</h1>
        <div class="news-container">
            <?php
            $news_query = new WP_Query(array('post_type' => 'post', 'posts_per_page' => 10));
            if ($news_query->have_posts()) :
                while ($news_query->have_posts()) : $news_query->the_post();
            ?>
                <div class="news-card">
                    <h2><?php the_title(); ?></h2>
                    <p><?php the_excerpt(); ?></p>
                    <a href="<?php the_permalink(); ?>" class="read-more">Read more</a>
                </div>
            <?php
                endwhile;
                wp_reset_postdata();
            else :
                echo '<p>No news available</p>';
            endif;
            ?>
        </div>
    </section>
</main>

<footer>
    <div class="dev_info">
        <div class="footer-item">
            <p class="dev_name">John Doe - Developer</p>
            <a href="https://twitter.com/johndoe">Twitter</a>
            <a href="https://facebook.com/johndoe">Facebook</a>
            <a href="https://instagram.com/johndoe">Instagram</a>
            <a href="https://johndoe.com">Website</a>
        </div>
    </div>
    <div class="contact">
        <a href="map.html">College Map</a>
        <a href="faq.html">FAQ</a>
    </div>
</footer>

<?php wp_footer(); ?>
</body>
</html>
