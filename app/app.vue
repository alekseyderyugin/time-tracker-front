<template>
    <link rel="preconnect" href="https://fonts.googleapis.com">
    <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
    <link href="https://fonts.googleapis.com/css2?family=Montserrat:ital,wght@0,100..900;1,100..900&display=swap" rel="stylesheet">

<!--    <NuxtLayout />
    -->

    <div class="container-fluid h-100">
        <div class="row h-100">
            <div class="col-md-2 h-100">
                <div class="d-flex flex-column flex-shrink-0 p-3 bg-light h-100">
<!--                    <a href="/" class="d-flex align-items-center mb-3 mb-md-0 me-md-auto link-dark text-decoration-none">
                        <svg class="bi me-2" width="40" height="32"><use xlink:href="#bootstrap"></use></svg>
                        <span class="fs-4">Track</span>
                    </a>
                    <hr>-->
                    <div class="dropdown">
                        <a href="#" class="d-flex align-items-center link-dark text-decoration-none dropdown-toggle" id="dropdownUser2" data-bs-toggle="dropdown" aria-expanded="false">
                            <img src="https://github.com/mdo.png" alt="" width="32" height="32" class="rounded-circle me-2">
                            <strong>Aleksey Deryugin</strong>
                        </a>
                        <ul class="dropdown-menu text-small shadow" aria-labelledby="dropdownUser2">
                            <li><a class="dropdown-item" href="#">New project...</a></li>
                            <li><a class="dropdown-item" href="#">Settings</a></li>
                            <li><a class="dropdown-item" href="#">Profile</a></li>
                            <li><hr class="dropdown-divider"></li>
                            <li><a class="dropdown-item" href="#">Sign out</a></li>
                        </ul>
                    </div>
                    <hr>
                    <ul class="nav nav-pills flex-column mb-auto">
                        <li class="nav-item">
                            <NuxtLink to='/' class="nav-link">
                                <svg class="bi me-2" width="16" height="16"><use xlink:href="#home"></use></svg>
                                Трекер
                            </NuxtLink>

                            <NuxtLink to='/settings' class="nav-link">
                                <svg class="bi me-2" width="16" height="16"><use xlink:href="#home"></use></svg>
                                Настройки
                            </NuxtLink>
                        </li>
                    </ul>

                </div>
            </div>

            <div class="col-md-10 h-100">
                <div class="container-fluid">
                    <NuxtPage />
                </div>
            </div>
        </div>
    </div>

</template>

<script>
export default {
    layout: 'default'
}
</script>

<style>

html, body, #__nuxt {
    height: 100%;
}

/*html {
    font-family: "Montserrat", serif;
    font-optical-sizing: auto;
    font-weight: 400;
    font-style: normal;
}*/

/*html, body, #__nuxt {
    height: 100%;
}

html > body {
    font-family: Inter;
}

::-webkit-scrollbar {
    width: 6px;
    height: 6px;
}

::-webkit-scrollbar-track {
    background: rgba(0, 0, 0, 0.05);
    border-radius: 4px;
}

::-webkit-scrollbar-thumb {
    background: rgba(0, 0, 0, 0.2);
    border-radius: 4px;
    transition: background 0.3s;
}

::-webkit-scrollbar-thumb:hover {
    background: rgba(0, 0, 0, 0.3);
}

* {
    scrollbar-width: thin;
    scrollbar-color: rgba(0, 0, 0, 0.2) rgba(0, 0, 0, 0.05);
}*/
</style>