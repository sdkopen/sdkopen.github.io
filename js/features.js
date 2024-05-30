const features = [
  {
    id: 1,
    icon: 'assets/img/features/sm-spring-storage.svg',
    description: 'This is a simple storage SDK for Spring Boot applications. It provides a simple way to store and retrieve files from the file system.',
    github: 'https://github.com/SeniorityMeter/sm-spring-storage',
    sonatype: 'https://central.sonatype.com/artifact/br.com.senioritymeter/storage',
  },
  {
    id: 2,
    icon: 'assets/img/features/sm-spring-notification.svg',
    description: 'This is a simple notification SDK for Spring Boot applications. It provides a simple way to send notifications to users.',
    github: 'https://github.com/SeniorityMeter/sm-spring-notification',
    sonatype: 'https://central.sonatype.com/artifact/br.com.senioritymeter/notification',
  },
  {
    id: 3,
    icon: 'assets/img/features/sm-spring-security.svg',
    description: 'This is a simple security SDK for Spring Boot applications. It provides a simple configuration of provides authentication for your applications.',
    github: 'https://github.com/SeniorityMeter/sm-spring-security',
    sonatype: 'https://central.sonatype.com/artifact/br.com.senioritymeter/security',
  },
  {
    id: 4,
    icon: 'assets/img/features/sm-spring-documentation.svg',
    description: 'This is a simple documentation SDK for Spring Boot applications. It provides a simple configuration of provides documentation for your applications.',
    github: 'https://github.com/SeniorityMeter/sm-spring-documentation',
    sonatype: 'https://central.sonatype.com/artifact/br.com.senioritymeter/documentation',
  },
  {
    id: 5,
    icon: 'assets/img/features/sm-spring-monitoring.svg',
    description: 'This is a simple monitoring SDK for Spring Boot applications. It provides a simple configuration of provides monitoring for your applications.',
    github: 'https://github.com/SeniorityMeter/sm-spring-monitoring',
    sonatype: 'https://central.sonatype.com/artifact/br.com.senioritymeter/monitoring',
  }
];

function createFeatureModalElement(feature) {
  return `
    <div 
      class="portfolio-modal modal fade"
      id="portfolioModal${feature.id}"
      tabindex="-1"
      aria-labelledby="portfolioModal${feature.id}"
      aria-hidden="true">
      <div class="modal-dialog modal-xl">
        <div class="modal-content">
          <div class="modal-header border-0">
            <button class="btn-close" type="button" data-bs-dismiss="modal" aria-label="Close"></button>
          </div>
          <div class="modal-body text-center pb-5">
            <div class="container">
              <div class="row justify-content-center">
                <div class="col-lg-8">
                  <img class="rounded mb-5" src="${feature.icon}" alt="..."/>
                  <div class="divider-custom">
                    <div class="divider-custom-line"></div>
                    <div class="divider-custom-icon"><i class="fas fa-star"></i></div>
                    <div class="divider-custom-line"></div>
                  </div>
                  <!-- Portfolio Modal - Text-->
                  <p class="mb-4 h3">${feature.description}</p>
                </div>
                <div>
                  <a href="${feature.github}" target="_blank">
                    <img src="assets/img/link/github.png" alt="github link" width="100px" class="feature-link" />
                  </a>
                  <a href="${feature.sonatype}" target="_blank">
                    <img src="assets/img/link/sonatype.jpeg" alt="github link" width="100px" class="feature-link" />
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  `;
}

function createFeatureElement(feature) {
  return `
    <div class="col-md-6 col-lg-3 mb-5">
      <div class="portfolio-item mx-auto" data-bs-toggle="modal" data-bs-target="#portfolioModal${feature.id}">
        <div class="portfolio-item-caption d-flex align-items-center justify-content-center h-100 w-100">
          <div class="portfolio-item-caption-content text-center text-white">
            <i class="fas fa-plus fa-3x"></i>
          </div>
        </div>
        <img class="img-fluid" src="${feature.icon}" alt="..."/>
      </div>
      ${createFeatureModalElement(feature)}
    </div>
  `;
}

function mountFeatures() {
  const featuresElement = document.getElementById('features');
  for (let i = 0; i < features.length; i++) {
    featuresElement.innerHTML += createFeatureElement(features[i]);
  }
}

window.onload = function () {
  mountFeatures();
}