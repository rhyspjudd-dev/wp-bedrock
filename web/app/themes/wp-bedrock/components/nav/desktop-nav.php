<?php

$menu_items = wp_get_nav_menu_items('primary'); 

echo '<div class="desktop-nav">';
echo '<nav>';
    echo '<ul class="nav-items">';
    foreach ($menu_items as $item) {
        if (!$item->menu_item_parent) {
            echo '<li class="nav-item"><a href="' . $item->url . '">' . $item->title . '</a>';
            $submenu_items = get_submenu_items($menu_items, $item->ID);
            if (!empty($submenu_items)) {
                echo '<ul class="nav-submenu">
                ';
                foreach ($submenu_items as $submenu_item) {
                    echo '<li class="nav-submenu-item"><a href="' . $submenu_item->url . '">' . $submenu_item->title . '</a></li>';
                }
                echo '</ul>';
            }
            echo '</li>';
        }
    }
    echo '</ul>';
    function get_submenu_items($menu_items, $parent_id) {
        $submenu_items = array();
        foreach ($menu_items as $item) {
            if ($item->menu_item_parent == $parent_id) {
                $submenu_items[] = $item;
            }
        }
        return $submenu_items;
    }
echo '</nav>';
echo '</div>';
?>
