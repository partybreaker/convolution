<nav class="navbar navbar-expand-md navbar-dark bg-dark mb-4">
      <a class="navbar-brand" href="{% url 'home' %}">DjangoX</a>
      <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarCollapse" aria-controls="navbarCollapse" aria-expanded="false" aria-label="Toggle navigation">
        <span class="navbar-toggler-icon"></span>
      </button>
      <div class="collapse navbar-collapse" id="navbarCollapse">
        {% if user.is_authenticated %}
          <ul class="navbar-nav ml-auto">
            <li class="nav-item">
              <a class="nav-link dropdown-toggle" href="#" id="userMenu" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                {{ user.email }}
              </a>
              <div class="dropdown-menu dropdown-menu-right" aria-labelledby="userMenu">
                <a class="dropdown-item" href="{% url 'account_change_password' %}">Change password</a>
                <div class="dropdown-divider"></div>
                <a class="dropdown-item" href="{% url 'account_logout' %}">Log out</a>
              </div>
            </li>
          </ul>
        {% else %}
          <form class="form-inline ml-auto">
            <a href="{% url 'account_login' %}" class="btn btn-outline-secondary">Log in</a>
            <a href="{% url 'account_signup' %}" class="btn btn-primary ml-2">Sign up</a>
          </form>
        {% endif %}
      </div>
    </nav>