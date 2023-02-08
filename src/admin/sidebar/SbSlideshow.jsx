import React from "react";

const SbSlideshow = () => {
  return (
    <>
      <nav
        id="sidebarMenu"
        class="collapse d-lg-block sidebar collapse bg-white"
      >
        <div class="position-sticky">
          <div class="list-group list-group-flush mx-3 mt-4">
            <a
              href="/admin/dashboard"
              class="list-group-item list-group-item-action py-2 ripple"
              aria-current="true"
            >
              <i class="fas fa-tachometer-alt fa-fw me-3"></i>
              <span>Dashboard</span>
            </a>
            <a
              href="/admin/category"
              class="list-group-item list-group-item-action py-2 ripple"
            >
              <i class="fas fa-chart-area fa-fw me-3"></i>
              <span>Category</span>
            </a>
            <a
              href="/admin/products"
              class="list-group-item list-group-item-action py-2 ripple"
            >
              <i class="fas fa-lock fa-fw me-3"></i>
              <span>Product</span>
            </a>
            <a
              href="/admin/slideshow"
              class="list-group-item list-group-item-action py-2 ripple active"
            >
              <i class="fas fa-chart-line fa-fw me-3"></i>
              <span>Slideshow</span>
            </a>
            <a
              href="/admin/payment"
              class="list-group-item list-group-item-action py-2 ripple"
            >
              <i class="fas fa-chart-pie fa-fw me-3"></i>
              <span>Payment </span>
            </a>
            <a
              href="/admin/orders"
              class="list-group-item list-group-item-action py-2 ripple"
            >
              <i class="fas fa-chart-bar fa-fw me-3"></i>
              <span>Orders</span>
            </a>
            <a
              href="/admin/users"
              class="list-group-item list-group-item-action py-2 ripple"
            >
              <i class="fas fa-users fa-fw me-3"></i>
              <span>Users</span>
            </a>
          </div>
        </div>
      </nav>
    </>
  );
};

export default SbSlideshow;
