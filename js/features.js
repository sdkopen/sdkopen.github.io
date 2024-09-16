const features = [
  {
    id: 1,
    icon: 'assets/img/features/sdkopen-spring-storage.svg',
    description: 'This is a simple Storage SDK for Spring Boot applications.',
    components: [
      {
        name: 'sdkopen-spring-storage-aws-s3',
        icon: 'assets/img/features/storage/aws-s3.svg',
        description: 'This is a simple storage AWS S3 SDK for Spring Boot applications.',
        github: 'https://github.com/sdkopen/sdkopen-spring-storage-aws-s3',
        sonatype: 'https://central.sonatype.com/artifact/br.com.sdkopen/storage-aws-s3',
      }
    ]
  },
  {
    id: 2,
    icon: 'assets/img/features/sdkopen-spring-notification.svg',
    description: 'This is a simple notification SDK for Spring Boot applications.',
    components: [
      {
        name: 'sdkopen-spring-notification-email',
        icon: 'assets/img/features/notification/email.svg',
        description: 'This is a simple notification email SDK for Spring Boot applications.',
        github: 'https://github.com/sdkopen/sdkopen-spring-notification-email',
        sonatype: 'https://central.sonatype.com/artifact/br.com.sdkopen/notification-email',
      }
    ]
  },
  {
    id: 3,
    icon: 'assets/img/features/sdkopen-spring-security.svg',
    description: 'This is a simple security SDK for Spring Boot applications.',
    github: 'https://github.com/sdkopen/sdkopen-spring-security',
    sonatype: 'https://central.sonatype.com/artifact/br.com.sdkopen/security',
  },
  {
    id: 4,
    icon: 'assets/img/features/sdkopen-spring-documentation.svg',
    description: 'This is a simple documentation SDK for Spring Boot applications.',
    github: 'https://github.com/SeniorityMeter/sdkopen-spring-documentation',
    sonatype: 'https://central.sonatype.com/artifact/br.com.sdkopen/documentation',
  },
  {
    id: 5,
    icon: 'assets/img/features/sdkopen-spring-monitoring.svg',
    description: 'This is a simple monitoring SDK for Spring Boot applications.',
    github: 'https://github.com/sdkopen/sdkopen-spring-monitoring',
    sonatype: 'https://central.sonatype.com/artifact/br.com.sdkopen/monitoring',
  }
];

function createFeatureDetailsElement(feature) {
  const details = createDetailsElement(feature);
  return `
    <div class="col-md-6 col-lg-3 mb-5">
      <div class="mx-auto">
        <img class="img-fluid" src="${feature.icon}" alt="..."/>
      </div>
      ${details}
    </div> 
  `;
}

function createDetailsElement(feature) {
  return `
    <div>
      <a href="${feature.github}" target="_blank">
        <img src="assets/img/link/github.png" alt="github link" width="100px" class="feature-link" />
      </a>
      <a href="${feature.sonatype}" target="_blank">
        <img src="assets/img/link/sonatype.jpeg" alt="github link" width="100px" class="feature-link" />
      </a>
    </div>
  `;
}

function createGroupFeature(components) {
  return `
    <div class="row">
     ${components.map(component => createFeatureDetailsElement(component)).join('')}
    </div>
  `;
}

function createFeatureModalElement(feature) {
  const details = feature.components
    ? createGroupFeature(feature.components)
    : createDetailsElement(feature);

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
                ${details}
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