<template>
  <!-- Contact -->
  <section class="section section-lg pt-lg-0 section-contact-us">
    <div class="container">
      <div class="row justify-content-center mt--200">
        <div class="col-lg-8">
          <form
            name="contact"
            id="contact"
            method="POST"
            data-netlify="true"
            netlify-honeypot="bot-field"
          >
            <card
              gradient="secondary"
              shadow
              body-classes="p-lg-5"
              data-aos="fade-up"
              data-aos-delay="450"
            >
              <h4 class="mb-1">Wil je meer van ons weten?</h4>
              <p class="mt-0">
                <badge type="primary" class="mr-3">Laat een bericht achter</badge>
              </p>

              <div v-show="false">
                <input name="form-name" value="contact" />
              </div>

              <ValidationObserver v-slot="{ invalid }">
                <ValidationProvider name="model.name" rules="required|min:1">
                  <div slot-scope="{ errors }">
                    <base-input
                      name="name"
                      class="mt-5"
                      alternative
                      placeholder="Naam"
                      type="text"
                      addon-left-icon="ni ni-circle-08"
                      v-model="model.name"
                      :error="errors[0]"
                    ></base-input>
                  </div>
                </ValidationProvider>
                <ValidationProvider name="email" rules="required|min:3|email">
                  <div slot-scope="{ errors }">
                    <base-input
                      name="email"
                      type="email"
                      alternative
                      placeholder="Email"
                      v-model="email"
                      addon-left-icon="ni ni-email-83"
                      :error="errors[0]"
                    ></base-input>
                  </div>
                </ValidationProvider>
                <ValidationProvider name="model.message" rules="required|min:1">
                  <div slot-scope="{ errors }">
                    <base-input class="mb-4" :error="errors[0]">
                      <textarea
                        name="message"
                        class="form-control form-control-alternative"
                        rows="4"
                        cols="80"
                        placeholder="Schrijf je bericht..."
                        v-model="model.message"
                      ></textarea>
                    </base-input>
                  </div>
                </ValidationProvider>
                <b-button block type="submit" variant="default" round :disabled="invalid">
                  <icon name="ni ni-send" size="sm"></icon>Verstuur
                </b-button>
              </ValidationObserver>
            </card>
          </form>
        </div>
      </div>
    </div>

    <div
      id="map-contactus-3"
      class="map skew-separator skew-top"
      style="height: 500px; position: relative; overflow: hidden;"
    >
      <div
        style="height: 100%; width: 100%; position: absolute; top: 0px; left: 0px; background-color: rgb(229, 227, 223);"
      >
        <div
          class="gm-style"
          style="position: absolute; z-index: 0; left: 0px; top: 0px; height: 100%; width: 100%; padding: 0px; border-width: 0px; margin: 0px;"
        >
          <div
            tabindex="0"
            style="position: absolute; z-index: 0; left: 0px; top: 0px; height: 100%; width: 100%; padding: 0px; border-width: 0px; margin: 0px; cursor: url(&quot;https://maps.gstatic.com/mapfiles/openhand_8_8.cur&quot;), default; touch-action: pan-x pan-y;"
          >
            <div
              style="z-index: 1; position: absolute; left: 50%; top: 50%; width: 100%; transform: translate(0px, 0px);"
            >
              <div style="position: absolute; left: 0px; top: 0px; z-index: 100; width: 100%;">
                <div style="position: absolute; left: 0px; top: 0px; z-index: 0;">
                  <div
                    style="position: absolute; z-index: 987; transform: matrix(1, 0, 0, 1, -108, -244);"
                  >
                    <div
                      style="position: absolute; left: 0px; top: 0px; width: 256px; height: 256px;"
                    >
                      <div style="width: 256px; height: 256px;"></div>
                    </div>
                    <div
                      style="position: absolute; left: -256px; top: -256px; width: 256px; height: 256px;"
                    >
                      <div style="width: 256px; height: 256px;"></div>
                    </div>
                    <div
                      style="position: absolute; left: 0px; top: -256px; width: 256px; height: 256px;"
                    >
                      <div style="width: 256px; height: 256px;"></div>
                    </div>
                    <div
                      style="position: absolute; left: 256px; top: -256px; width: 256px; height: 256px;"
                    >
                      <div style="width: 256px; height: 256px;"></div>
                    </div>
                    <div
                      style="position: absolute; left: -512px; top: -256px; width: 256px; height: 256px;"
                    >
                      <div style="width: 256px; height: 256px;"></div>
                    </div>
                    <div
                      style="position: absolute; left: 512px; top: -256px; width: 256px; height: 256px;"
                    >
                      <div style="width: 256px; height: 256px;"></div>
                    </div>
                    <div
                      style="position: absolute; left: -768px; top: 256px; width: 256px; height: 256px;"
                    >
                      <div style="width: 256px; height: 256px;"></div>
                    </div>
                    <div
                      style="position: absolute; left: -768px; top: 0px; width: 256px; height: 256px;"
                    >
                      <div style="width: 256px; height: 256px;"></div>
                    </div>
                    <div
                      style="position: absolute; left: -768px; top: -256px; width: 256px; height: 256px;"
                    >
                      <div style="width: 256px; height: 256px;"></div>
                    </div>
                    <div
                      style="position: absolute; left: 768px; top: -256px; width: 256px; height: 256px;"
                    >
                      <div style="width: 256px; height: 256px;"></div>
                    </div>
                    <div
                      style="position: absolute; left: 768px; top: 0px; width: 256px; height: 256px;"
                    >
                      <div style="width: 256px; height: 256px;"></div>
                    </div>
                    <div
                      style="position: absolute; left: 768px; top: 256px; width: 256px; height: 256px;"
                    >
                      <div style="width: 256px; height: 256px;"></div>
                    </div>
                    <div
                      style="position: absolute; left: -1024px; top: 256px; width: 256px; height: 256px;"
                    >
                      <div style="width: 256px; height: 256px;"></div>
                    </div>
                    <div
                      style="position: absolute; left: -1024px; top: 0px; width: 256px; height: 256px;"
                    >
                      <div style="width: 256px; height: 256px;"></div>
                    </div>
                    <div
                      style="position: absolute; left: -1024px; top: -256px; width: 256px; height: 256px;"
                    >
                      <div style="width: 256px; height: 256px;"></div>
                    </div>
                    <div
                      style="position: absolute; left: 1024px; top: -256px; width: 256px; height: 256px;"
                    >
                      <div style="width: 256px; height: 256px;"></div>
                    </div>
                    <div
                      style="position: absolute; left: 1024px; top: 0px; width: 256px; height: 256px;"
                    >
                      <div style="width: 256px; height: 256px;"></div>
                    </div>
                    <div
                      style="position: absolute; left: 1024px; top: 256px; width: 256px; height: 256px;"
                    >
                      <div style="width: 256px; height: 256px;"></div>
                    </div>
                    <div
                      style="position: absolute; left: -256px; top: 0px; width: 256px; height: 256px;"
                    >
                      <div style="width: 256px; height: 256px;"></div>
                    </div>
                    <div
                      style="position: absolute; left: 256px; top: 0px; width: 256px; height: 256px;"
                    >
                      <div style="width: 256px; height: 256px;"></div>
                    </div>
                    <div
                      style="position: absolute; left: 256px; top: 256px; width: 256px; height: 256px;"
                    >
                      <div style="width: 256px; height: 256px;"></div>
                    </div>
                    <div
                      style="position: absolute; left: 0px; top: 256px; width: 256px; height: 256px;"
                    >
                      <div style="width: 256px; height: 256px;"></div>
                    </div>
                    <div
                      style="position: absolute; left: -256px; top: 256px; width: 256px; height: 256px;"
                    >
                      <div style="width: 256px; height: 256px;"></div>
                    </div>
                    <div
                      style="position: absolute; left: -512px; top: 256px; width: 256px; height: 256px;"
                    >
                      <div style="width: 256px; height: 256px;"></div>
                    </div>
                    <div
                      style="position: absolute; left: -512px; top: 0px; width: 256px; height: 256px;"
                    >
                      <div style="width: 256px; height: 256px;"></div>
                    </div>
                    <div
                      style="position: absolute; left: 512px; top: 0px; width: 256px; height: 256px;"
                    >
                      <div style="width: 256px; height: 256px;"></div>
                    </div>
                    <div
                      style="position: absolute; left: 512px; top: 256px; width: 256px; height: 256px;"
                    >
                      <div style="width: 256px; height: 256px;"></div>
                    </div>
                  </div>
                </div>
              </div>
              <div style="position: absolute; left: 0px; top: 0px; z-index: 101; width: 100%;"></div>
              <div style="position: absolute; left: 0px; top: 0px; z-index: 102; width: 100%;"></div>
              <div style="position: absolute; left: 0px; top: 0px; z-index: 103; width: 100%;">
                <div
                  style="width: 27px; height: 43px; overflow: hidden; position: absolute; left: -14px; top: -43px; z-index: 0;"
                >
                  <img
                    alt
                    src="https://maps.gstatic.com/mapfiles/api-3/images/spotlight-poi2_hdpi.png"
                    draggable="false"
                    style="position: absolute; left: 0px; top: 0px; width: 27px; height: 43px; user-select: none; border: 0px; padding: 0px; margin: 0px; max-width: none; opacity: 1;"
                  />
                </div>
                <div style="position: absolute; left: 0px; top: 0px; z-index: -1;">
                  <div
                    style="position: absolute; z-index: 987; transform: matrix(1, 0, 0, 1, -108, -244);"
                  >
                    <div
                      style="width: 256px; height: 256px; overflow: hidden; position: absolute; left: 0px; top: 256px;"
                    ></div>
                    <div
                      style="width: 256px; height: 256px; overflow: hidden; position: absolute; left: 768px; top: 0px;"
                    ></div>
                    <div
                      style="width: 256px; height: 256px; overflow: hidden; position: absolute; left: 768px; top: 256px;"
                    ></div>
                    <div
                      style="width: 256px; height: 256px; overflow: hidden; position: absolute; left: -256px; top: 256px;"
                    ></div>
                    <div
                      style="width: 256px; height: 256px; overflow: hidden; position: absolute; left: -256px; top: 0px;"
                    ></div>
                    <div
                      style="width: 256px; height: 256px; overflow: hidden; position: absolute; left: 0px; top: 0px;"
                    ></div>
                    <div
                      style="width: 256px; height: 256px; overflow: hidden; position: absolute; left: 256px; top: 0px;"
                    ></div>
                    <div
                      style="width: 256px; height: 256px; overflow: hidden; position: absolute; left: 256px; top: 256px;"
                    ></div>
                    <div
                      style="width: 256px; height: 256px; overflow: hidden; position: absolute; left: -512px; top: 256px;"
                    ></div>
                    <div
                      style="width: 256px; height: 256px; overflow: hidden; position: absolute; left: -512px; top: 0px;"
                    ></div>
                    <div
                      style="width: 256px; height: 256px; overflow: hidden; position: absolute; left: 512px; top: 0px;"
                    ></div>
                    <div
                      style="width: 256px; height: 256px; overflow: hidden; position: absolute; left: 512px; top: 256px;"
                    ></div>
                    <div
                      style="width: 256px; height: 256px; overflow: hidden; position: absolute; left: -768px; top: 256px;"
                    ></div>
                    <div
                      style="width: 256px; height: 256px; overflow: hidden; position: absolute; left: -768px; top: 0px;"
                    ></div>
                    <div
                      style="width: 256px; height: 256px; overflow: hidden; position: absolute; left: -1024px; top: 256px;"
                    ></div>
                    <div
                      style="width: 256px; height: 256px; overflow: hidden; position: absolute; left: -1024px; top: 0px;"
                    ></div>
                    <div
                      style="width: 256px; height: 256px; overflow: hidden; position: absolute; left: -256px; top: -256px;"
                    ></div>
                    <div
                      style="width: 256px; height: 256px; overflow: hidden; position: absolute; left: 0px; top: -256px;"
                    ></div>
                    <div
                      style="width: 256px; height: 256px; overflow: hidden; position: absolute; left: 256px; top: -256px;"
                    ></div>
                    <div
                      style="width: 256px; height: 256px; overflow: hidden; position: absolute; left: -512px; top: -256px;"
                    ></div>
                    <div
                      style="width: 256px; height: 256px; overflow: hidden; position: absolute; left: 512px; top: -256px;"
                    ></div>
                    <div
                      style="width: 256px; height: 256px; overflow: hidden; position: absolute; left: -768px; top: -256px;"
                    ></div>
                    <div
                      style="width: 256px; height: 256px; overflow: hidden; position: absolute; left: 768px; top: -256px;"
                    ></div>
                    <div
                      style="width: 256px; height: 256px; overflow: hidden; position: absolute; left: -1024px; top: -256px;"
                    ></div>
                    <div
                      style="width: 256px; height: 256px; overflow: hidden; position: absolute; left: 1024px; top: -256px;"
                    ></div>
                    <div
                      style="width: 256px; height: 256px; overflow: hidden; position: absolute; left: 1024px; top: 0px;"
                    ></div>
                    <div
                      style="width: 256px; height: 256px; overflow: hidden; position: absolute; left: 1024px; top: 256px;"
                    ></div>
                  </div>
                </div>
              </div>
              <div style="position: absolute; left: 0px; top: 0px; z-index: 0;">
                <div
                  style="position: absolute; z-index: 987; transform: matrix(1, 0, 0, 1, -108, -244);"
                >
                  <div
                    style="position: absolute; left: 0px; top: 0px; width: 256px; height: 256px; transition: opacity 200ms linear 0s;"
                  >
                    <img
                      draggable="false"
                      alt
                      role="presentation"
                      src="https://maps.googleapis.com/maps/vt?pb=!1m5!1m4!1i13!2i2412!3i3078!4i256!2m3!1e0!2sm!3i503220532!2m3!1e2!6m1!3e5!3m17!2snl-BE!3sUS!5e18!12m4!1e68!2m2!1sset!2sRoadmap!12m3!1e37!2m1!1ssmartmaps!12m4!1e26!2m2!1sstyles!2zcC5zOi02MHxwLmw6LTYw!4e0!5m1!5f2&amp;key=AIzaSyDTTfWur0PDbZWPr7Pmq8K3jiDp0_xUziI&amp;token=100654"
                      style="width: 256px; height: 256px; user-select: none; border: 0px; padding: 0px; margin: 0px; max-width: none;"
                    />
                  </div>
                  <div
                    style="position: absolute; left: -256px; top: 0px; width: 256px; height: 256px; transition: opacity 200ms linear 0s;"
                  >
                    <img
                      draggable="false"
                      alt
                      role="presentation"
                      src="https://maps.googleapis.com/maps/vt?pb=!1m5!1m4!1i13!2i2411!3i3078!4i256!2m3!1e0!2sm!3i503220532!2m3!1e2!6m1!3e5!3m17!2snl-BE!3sUS!5e18!12m4!1e68!2m2!1sset!2sRoadmap!12m3!1e37!2m1!1ssmartmaps!12m4!1e26!2m2!1sstyles!2zcC5zOi02MHxwLmw6LTYw!4e0!5m1!5f2&amp;key=AIzaSyDTTfWur0PDbZWPr7Pmq8K3jiDp0_xUziI&amp;token=83322"
                      style="width: 256px; height: 256px; user-select: none; border: 0px; padding: 0px; margin: 0px; max-width: none;"
                    />
                  </div>
                  <div
                    style="position: absolute; left: -256px; top: -256px; width: 256px; height: 256px; transition: opacity 200ms linear 0s;"
                  >
                    <img
                      draggable="false"
                      alt
                      role="presentation"
                      src="https://maps.googleapis.com/maps/vt?pb=!1m5!1m4!1i13!2i2411!3i3077!4i256!2m3!1e0!2sm!3i503220532!2m3!1e2!6m1!3e5!3m17!2snl-BE!3sUS!5e18!12m4!1e68!2m2!1sset!2sRoadmap!12m3!1e37!2m1!1ssmartmaps!12m4!1e26!2m2!1sstyles!2zcC5zOi02MHxwLmw6LTYw!4e0!5m1!5f2&amp;key=AIzaSyDTTfWur0PDbZWPr7Pmq8K3jiDp0_xUziI&amp;token=71232"
                      style="width: 256px; height: 256px; user-select: none; border: 0px; padding: 0px; margin: 0px; max-width: none;"
                    />
                  </div>
                  <div
                    style="position: absolute; left: 0px; top: -256px; width: 256px; height: 256px; transition: opacity 200ms linear 0s;"
                  >
                    <img
                      draggable="false"
                      alt
                      role="presentation"
                      src="https://maps.googleapis.com/maps/vt?pb=!1m5!1m4!1i13!2i2412!3i3077!4i256!2m3!1e0!2sm!3i503220532!2m3!1e2!6m1!3e5!3m17!2snl-BE!3sUS!5e18!12m4!1e68!2m2!1sset!2sRoadmap!12m3!1e37!2m1!1ssmartmaps!12m4!1e26!2m2!1sstyles!2zcC5zOi02MHxwLmw6LTYw!4e0!5m1!5f2&amp;key=AIzaSyDTTfWur0PDbZWPr7Pmq8K3jiDp0_xUziI&amp;token=88564"
                      style="width: 256px; height: 256px; user-select: none; border: 0px; padding: 0px; margin: 0px; max-width: none;"
                    />
                  </div>
                  <div
                    style="position: absolute; left: 256px; top: -256px; width: 256px; height: 256px; transition: opacity 200ms linear 0s;"
                  >
                    <img
                      draggable="false"
                      alt
                      role="presentation"
                      src="https://maps.googleapis.com/maps/vt?pb=!1m5!1m4!1i13!2i2413!3i3077!4i256!2m3!1e0!2sm!3i503220497!2m3!1e2!6m1!3e5!3m17!2snl-BE!3sUS!5e18!12m4!1e68!2m2!1sset!2sRoadmap!12m3!1e37!2m1!1ssmartmaps!12m4!1e26!2m2!1sstyles!2zcC5zOi02MHxwLmw6LTYw!4e0!5m1!5f2&amp;key=AIzaSyDTTfWur0PDbZWPr7Pmq8K3jiDp0_xUziI&amp;token=37005"
                      style="width: 256px; height: 256px; user-select: none; border: 0px; padding: 0px; margin: 0px; max-width: none;"
                    />
                  </div>
                  <div
                    style="position: absolute; left: 256px; top: 0px; width: 256px; height: 256px; transition: opacity 200ms linear 0s;"
                  >
                    <img
                      draggable="false"
                      alt
                      role="presentation"
                      src="https://maps.googleapis.com/maps/vt?pb=!1m5!1m4!1i13!2i2413!3i3078!4i256!2m3!1e0!2sm!3i503220532!2m3!1e2!6m1!3e5!3m17!2snl-BE!3sUS!5e18!12m4!1e68!2m2!1sset!2sRoadmap!12m3!1e37!2m1!1ssmartmaps!12m4!1e26!2m2!1sstyles!2zcC5zOi02MHxwLmw6LTYw!4e0!5m1!5f2&amp;key=AIzaSyDTTfWur0PDbZWPr7Pmq8K3jiDp0_xUziI&amp;token=117986"
                      style="width: 256px; height: 256px; user-select: none; border: 0px; padding: 0px; margin: 0px; max-width: none;"
                    />
                  </div>
                  <div
                    style="position: absolute; left: 256px; top: 256px; width: 256px; height: 256px; transition: opacity 200ms linear 0s;"
                  >
                    <img
                      draggable="false"
                      alt
                      role="presentation"
                      src="https://maps.googleapis.com/maps/vt?pb=!1m5!1m4!1i13!2i2413!3i3079!4i256!2m3!1e0!2sm!3i503220532!2m3!1e2!6m1!3e5!3m17!2snl-BE!3sUS!5e18!12m4!1e68!2m2!1sset!2sRoadmap!12m3!1e37!2m1!1ssmartmaps!12m4!1e26!2m2!1sstyles!2zcC5zOi02MHxwLmw6LTYw!4e0!5m1!5f2&amp;key=AIzaSyDTTfWur0PDbZWPr7Pmq8K3jiDp0_xUziI&amp;token=130076"
                      style="width: 256px; height: 256px; user-select: none; border: 0px; padding: 0px; margin: 0px; max-width: none;"
                    />
                  </div>
                  <div
                    style="position: absolute; left: 0px; top: 256px; width: 256px; height: 256px; transition: opacity 200ms linear 0s;"
                  >
                    <img
                      draggable="false"
                      alt
                      role="presentation"
                      src="https://maps.googleapis.com/maps/vt?pb=!1m5!1m4!1i13!2i2412!3i3079!4i256!2m3!1e0!2sm!3i503220532!2m3!1e2!6m1!3e5!3m17!2snl-BE!3sUS!5e18!12m4!1e68!2m2!1sset!2sRoadmap!12m3!1e37!2m1!1ssmartmaps!12m4!1e26!2m2!1sstyles!2zcC5zOi02MHxwLmw6LTYw!4e0!5m1!5f2&amp;key=AIzaSyDTTfWur0PDbZWPr7Pmq8K3jiDp0_xUziI&amp;token=112744"
                      style="width: 256px; height: 256px; user-select: none; border: 0px; padding: 0px; margin: 0px; max-width: none;"
                    />
                  </div>
                  <div
                    style="position: absolute; left: -256px; top: 256px; width: 256px; height: 256px; transition: opacity 200ms linear 0s;"
                  >
                    <img
                      draggable="false"
                      alt
                      role="presentation"
                      src="https://maps.googleapis.com/maps/vt?pb=!1m5!1m4!1i13!2i2411!3i3079!4i256!2m3!1e0!2sm!3i503220532!2m3!1e2!6m1!3e5!3m17!2snl-BE!3sUS!5e18!12m4!1e68!2m2!1sset!2sRoadmap!12m3!1e37!2m1!1ssmartmaps!12m4!1e26!2m2!1sstyles!2zcC5zOi02MHxwLmw6LTYw!4e0!5m1!5f2&amp;key=AIzaSyDTTfWur0PDbZWPr7Pmq8K3jiDp0_xUziI&amp;token=95412"
                      style="width: 256px; height: 256px; user-select: none; border: 0px; padding: 0px; margin: 0px; max-width: none;"
                    />
                  </div>
                  <div
                    style="position: absolute; left: -512px; top: 256px; width: 256px; height: 256px; transition: opacity 200ms linear 0s;"
                  >
                    <img
                      draggable="false"
                      alt
                      role="presentation"
                      src="https://maps.googleapis.com/maps/vt?pb=!1m5!1m4!1i13!2i2410!3i3079!4i256!2m3!1e0!2sm!3i503220521!2m3!1e2!6m1!3e5!3m17!2snl-BE!3sUS!5e18!12m4!1e68!2m2!1sset!2sRoadmap!12m3!1e37!2m1!1ssmartmaps!12m4!1e26!2m2!1sstyles!2zcC5zOi02MHxwLmw6LTYw!4e0!5m1!5f2&amp;key=AIzaSyDTTfWur0PDbZWPr7Pmq8K3jiDp0_xUziI&amp;token=74540"
                      style="width: 256px; height: 256px; user-select: none; border: 0px; padding: 0px; margin: 0px; max-width: none;"
                    />
                  </div>
                  <div
                    style="position: absolute; left: -512px; top: 0px; width: 256px; height: 256px; transition: opacity 200ms linear 0s;"
                  >
                    <img
                      draggable="false"
                      alt
                      role="presentation"
                      src="https://maps.googleapis.com/maps/vt?pb=!1m5!1m4!1i13!2i2410!3i3078!4i256!2m3!1e0!2sm!3i503220532!2m3!1e2!6m1!3e5!3m17!2snl-BE!3sUS!5e18!12m4!1e68!2m2!1sset!2sRoadmap!12m3!1e37!2m1!1ssmartmaps!12m4!1e26!2m2!1sstyles!2zcC5zOi02MHxwLmw6LTYw!4e0!5m1!5f2&amp;key=AIzaSyDTTfWur0PDbZWPr7Pmq8K3jiDp0_xUziI&amp;token=65990"
                      style="width: 256px; height: 256px; user-select: none; border: 0px; padding: 0px; margin: 0px; max-width: none;"
                    />
                  </div>
                  <div
                    style="position: absolute; left: -512px; top: -256px; width: 256px; height: 256px; transition: opacity 200ms linear 0s;"
                  >
                    <img
                      draggable="false"
                      alt
                      role="presentation"
                      src="https://maps.googleapis.com/maps/vt?pb=!1m5!1m4!1i13!2i2410!3i3077!4i256!2m3!1e0!2sm!3i503220532!2m3!1e2!6m1!3e5!3m17!2snl-BE!3sUS!5e18!12m4!1e68!2m2!1sset!2sRoadmap!12m3!1e37!2m1!1ssmartmaps!12m4!1e26!2m2!1sstyles!2zcC5zOi02MHxwLmw6LTYw!4e0!5m1!5f2&amp;key=AIzaSyDTTfWur0PDbZWPr7Pmq8K3jiDp0_xUziI&amp;token=53900"
                      style="width: 256px; height: 256px; user-select: none; border: 0px; padding: 0px; margin: 0px; max-width: none;"
                    />
                  </div>
                  <div
                    style="position: absolute; left: 512px; top: -256px; width: 256px; height: 256px; transition: opacity 200ms linear 0s;"
                  >
                    <img
                      draggable="false"
                      alt
                      role="presentation"
                      src="https://maps.googleapis.com/maps/vt?pb=!1m5!1m4!1i13!2i2414!3i3077!4i256!2m3!1e0!2sm!3i503220532!2m3!1e2!6m1!3e5!3m17!2snl-BE!3sUS!5e18!12m4!1e68!2m2!1sset!2sRoadmap!12m3!1e37!2m1!1ssmartmaps!12m4!1e26!2m2!1sstyles!2zcC5zOi02MHxwLmw6LTYw!4e0!5m1!5f2&amp;key=AIzaSyDTTfWur0PDbZWPr7Pmq8K3jiDp0_xUziI&amp;token=123228"
                      style="width: 256px; height: 256px; user-select: none; border: 0px; padding: 0px; margin: 0px; max-width: none;"
                    />
                  </div>
                  <div
                    style="position: absolute; left: 512px; top: 0px; width: 256px; height: 256px; transition: opacity 200ms linear 0s;"
                  >
                    <img
                      draggable="false"
                      alt
                      role="presentation"
                      src="https://maps.googleapis.com/maps/vt?pb=!1m5!1m4!1i13!2i2414!3i3078!4i256!2m3!1e0!2sm!3i503220532!2m3!1e2!6m1!3e5!3m17!2snl-BE!3sUS!5e18!12m4!1e68!2m2!1sset!2sRoadmap!12m3!1e37!2m1!1ssmartmaps!12m4!1e26!2m2!1sstyles!2zcC5zOi02MHxwLmw6LTYw!4e0!5m1!5f2&amp;key=AIzaSyDTTfWur0PDbZWPr7Pmq8K3jiDp0_xUziI&amp;token=4247"
                      style="width: 256px; height: 256px; user-select: none; border: 0px; padding: 0px; margin: 0px; max-width: none;"
                    />
                  </div>
                  <div
                    style="position: absolute; left: 512px; top: 256px; width: 256px; height: 256px; transition: opacity 200ms linear 0s;"
                  >
                    <img
                      draggable="false"
                      alt
                      role="presentation"
                      src="https://maps.googleapis.com/maps/vt?pb=!1m5!1m4!1i13!2i2414!3i3079!4i256!2m3!1e0!2sm!3i503220532!2m3!1e2!6m1!3e5!3m17!2snl-BE!3sUS!5e18!12m4!1e68!2m2!1sset!2sRoadmap!12m3!1e37!2m1!1ssmartmaps!12m4!1e26!2m2!1sstyles!2zcC5zOi02MHxwLmw6LTYw!4e0!5m1!5f2&amp;key=AIzaSyDTTfWur0PDbZWPr7Pmq8K3jiDp0_xUziI&amp;token=16337"
                      style="width: 256px; height: 256px; user-select: none; border: 0px; padding: 0px; margin: 0px; max-width: none;"
                    />
                  </div>
                  <div
                    style="position: absolute; left: -768px; top: 256px; width: 256px; height: 256px; transition: opacity 200ms linear 0s;"
                  >
                    <img
                      draggable="false"
                      alt
                      role="presentation"
                      src="https://maps.googleapis.com/maps/vt?pb=!1m5!1m4!1i13!2i2409!3i3079!4i256!2m3!1e0!2sm!3i503220497!2m3!1e2!6m1!3e5!3m17!2snl-BE!3sUS!5e18!12m4!1e68!2m2!1sset!2sRoadmap!12m3!1e37!2m1!1ssmartmaps!12m4!1e26!2m2!1sstyles!2zcC5zOi02MHxwLmw6LTYw!4e0!5m1!5f2&amp;key=AIzaSyDTTfWur0PDbZWPr7Pmq8K3jiDp0_xUziI&amp;token=82337"
                      style="width: 256px; height: 256px; user-select: none; border: 0px; padding: 0px; margin: 0px; max-width: none;"
                    />
                  </div>
                  <div
                    style="position: absolute; left: -768px; top: 0px; width: 256px; height: 256px; transition: opacity 200ms linear 0s;"
                  >
                    <img
                      draggable="false"
                      alt
                      role="presentation"
                      src="https://maps.googleapis.com/maps/vt?pb=!1m5!1m4!1i13!2i2409!3i3078!4i256!2m3!1e0!2sm!3i503220532!2m3!1e2!6m1!3e5!3m17!2snl-BE!3sUS!5e18!12m4!1e68!2m2!1sset!2sRoadmap!12m3!1e37!2m1!1ssmartmaps!12m4!1e26!2m2!1sstyles!2zcC5zOi02MHxwLmw6LTYw!4e0!5m1!5f2&amp;key=AIzaSyDTTfWur0PDbZWPr7Pmq8K3jiDp0_xUziI&amp;token=8067"
                      style="width: 256px; height: 256px; user-select: none; border: 0px; padding: 0px; margin: 0px; max-width: none;"
                    />
                  </div>
                  <div
                    style="position: absolute; left: -768px; top: -256px; width: 256px; height: 256px; transition: opacity 200ms linear 0s;"
                  >
                    <img
                      draggable="false"
                      alt
                      role="presentation"
                      src="https://maps.googleapis.com/maps/vt?pb=!1m5!1m4!1i13!2i2409!3i3077!4i256!2m3!1e0!2sm!3i503220532!2m3!1e2!6m1!3e5!3m17!2snl-BE!3sUS!5e18!12m4!1e68!2m2!1sset!2sRoadmap!12m3!1e37!2m1!1ssmartmaps!12m4!1e26!2m2!1sstyles!2zcC5zOi02MHxwLmw6LTYw!4e0!5m1!5f2&amp;key=AIzaSyDTTfWur0PDbZWPr7Pmq8K3jiDp0_xUziI&amp;token=127048"
                      style="width: 256px; height: 256px; user-select: none; border: 0px; padding: 0px; margin: 0px; max-width: none;"
                    />
                  </div>
                  <div
                    style="position: absolute; left: 768px; top: -256px; width: 256px; height: 256px; transition: opacity 200ms linear 0s;"
                  >
                    <img
                      draggable="false"
                      alt
                      role="presentation"
                      src="https://maps.googleapis.com/maps/vt?pb=!1m5!1m4!1i13!2i2415!3i3077!4i256!2m3!1e0!2sm!3i503220532!2m3!1e2!6m1!3e5!3m17!2snl-BE!3sUS!5e18!12m4!1e68!2m2!1sset!2sRoadmap!12m3!1e37!2m1!1ssmartmaps!12m4!1e26!2m2!1sstyles!2zcC5zOi02MHxwLmw6LTYw!4e0!5m1!5f2&amp;key=AIzaSyDTTfWur0PDbZWPr7Pmq8K3jiDp0_xUziI&amp;token=9489"
                      style="width: 256px; height: 256px; user-select: none; border: 0px; padding: 0px; margin: 0px; max-width: none;"
                    />
                  </div>
                  <div
                    style="position: absolute; left: 768px; top: 0px; width: 256px; height: 256px; transition: opacity 200ms linear 0s;"
                  >
                    <img
                      draggable="false"
                      alt
                      role="presentation"
                      src="https://maps.googleapis.com/maps/vt?pb=!1m5!1m4!1i13!2i2415!3i3078!4i256!2m3!1e0!2sm!3i503220532!2m3!1e2!6m1!3e5!3m17!2snl-BE!3sUS!5e18!12m4!1e68!2m2!1sset!2sRoadmap!12m3!1e37!2m1!1ssmartmaps!12m4!1e26!2m2!1sstyles!2zcC5zOi02MHxwLmw6LTYw!4e0!5m1!5f2&amp;key=AIzaSyDTTfWur0PDbZWPr7Pmq8K3jiDp0_xUziI&amp;token=21579"
                      style="width: 256px; height: 256px; user-select: none; border: 0px; padding: 0px; margin: 0px; max-width: none;"
                    />
                  </div>
                  <div
                    style="position: absolute; left: 768px; top: 256px; width: 256px; height: 256px; transition: opacity 200ms linear 0s;"
                  >
                    <img
                      draggable="false"
                      alt
                      role="presentation"
                      src="https://maps.googleapis.com/maps/vt?pb=!1m5!1m4!1i13!2i2415!3i3079!4i256!2m3!1e0!2sm!3i503220532!2m3!1e2!6m1!3e5!3m17!2snl-BE!3sUS!5e18!12m4!1e68!2m2!1sset!2sRoadmap!12m3!1e37!2m1!1ssmartmaps!12m4!1e26!2m2!1sstyles!2zcC5zOi02MHxwLmw6LTYw!4e0!5m1!5f2&amp;key=AIzaSyDTTfWur0PDbZWPr7Pmq8K3jiDp0_xUziI&amp;token=33669"
                      style="width: 256px; height: 256px; user-select: none; border: 0px; padding: 0px; margin: 0px; max-width: none;"
                    />
                  </div>
                  <div
                    style="position: absolute; left: -1024px; top: 256px; width: 256px; height: 256px; transition: opacity 200ms linear 0s;"
                  >
                    <img
                      draggable="false"
                      alt
                      role="presentation"
                      src="https://maps.googleapis.com/maps/vt?pb=!1m5!1m4!1i13!2i2408!3i3079!4i256!2m3!1e0!2sm!3i503220508!2m3!1e2!6m1!3e5!3m17!2snl-BE!3sUS!5e18!12m4!1e68!2m2!1sset!2sRoadmap!12m3!1e37!2m1!1ssmartmaps!12m4!1e26!2m2!1sstyles!2zcC5zOi02MHxwLmw6LTYw!4e0!5m1!5f2&amp;key=AIzaSyDTTfWur0PDbZWPr7Pmq8K3jiDp0_xUziI&amp;token=67987"
                      style="width: 256px; height: 256px; user-select: none; border: 0px; padding: 0px; margin: 0px; max-width: none;"
                    />
                  </div>
                  <div
                    style="position: absolute; left: -1024px; top: 0px; width: 256px; height: 256px; transition: opacity 200ms linear 0s;"
                  >
                    <img
                      draggable="false"
                      alt
                      role="presentation"
                      src="https://maps.googleapis.com/maps/vt?pb=!1m5!1m4!1i13!2i2408!3i3078!4i256!2m3!1e0!2sm!3i503220532!2m3!1e2!6m1!3e5!3m17!2snl-BE!3sUS!5e18!12m4!1e68!2m2!1sset!2sRoadmap!12m3!1e37!2m1!1ssmartmaps!12m4!1e26!2m2!1sstyles!2zcC5zOi02MHxwLmw6LTYw!4e0!5m1!5f2&amp;key=AIzaSyDTTfWur0PDbZWPr7Pmq8K3jiDp0_xUziI&amp;token=121806"
                      style="width: 256px; height: 256px; user-select: none; border: 0px; padding: 0px; margin: 0px; max-width: none;"
                    />
                  </div>
                  <div
                    style="position: absolute; left: -1024px; top: -256px; width: 256px; height: 256px; transition: opacity 200ms linear 0s;"
                  >
                    <img
                      draggable="false"
                      alt
                      role="presentation"
                      src="https://maps.googleapis.com/maps/vt?pb=!1m5!1m4!1i13!2i2408!3i3077!4i256!2m3!1e0!2sm!3i503220532!2m3!1e2!6m1!3e5!3m17!2snl-BE!3sUS!5e18!12m4!1e68!2m2!1sset!2sRoadmap!12m3!1e37!2m1!1ssmartmaps!12m4!1e26!2m2!1sstyles!2zcC5zOi02MHxwLmw6LTYw!4e0!5m1!5f2&amp;key=AIzaSyDTTfWur0PDbZWPr7Pmq8K3jiDp0_xUziI&amp;token=109716"
                      style="width: 256px; height: 256px; user-select: none; border: 0px; padding: 0px; margin: 0px; max-width: none;"
                    />
                  </div>
                  <div
                    style="position: absolute; left: 1024px; top: -256px; width: 256px; height: 256px; transition: opacity 200ms linear 0s;"
                  >
                    <img
                      draggable="false"
                      alt
                      role="presentation"
                      src="https://maps.googleapis.com/maps/vt?pb=!1m5!1m4!1i13!2i2416!3i3077!4i256!2m3!1e0!2sm!3i503220532!2m3!1e2!6m1!3e5!3m17!2snl-BE!3sUS!5e18!12m4!1e68!2m2!1sset!2sRoadmap!12m3!1e37!2m1!1ssmartmaps!12m4!1e26!2m2!1sstyles!2zcC5zOi02MHxwLmw6LTYw!4e0!5m1!5f2&amp;key=AIzaSyDTTfWur0PDbZWPr7Pmq8K3jiDp0_xUziI&amp;token=26821"
                      style="width: 256px; height: 256px; user-select: none; border: 0px; padding: 0px; margin: 0px; max-width: none;"
                    />
                  </div>
                  <div
                    style="position: absolute; left: 1024px; top: 0px; width: 256px; height: 256px; transition: opacity 200ms linear 0s;"
                  >
                    <img
                      draggable="false"
                      alt
                      role="presentation"
                      src="https://maps.googleapis.com/maps/vt?pb=!1m5!1m4!1i13!2i2416!3i3078!4i256!2m3!1e0!2sm!3i503220532!2m3!1e2!6m1!3e5!3m17!2snl-BE!3sUS!5e18!12m4!1e68!2m2!1sset!2sRoadmap!12m3!1e37!2m1!1ssmartmaps!12m4!1e26!2m2!1sstyles!2zcC5zOi02MHxwLmw6LTYw!4e0!5m1!5f2&amp;key=AIzaSyDTTfWur0PDbZWPr7Pmq8K3jiDp0_xUziI&amp;token=38911"
                      style="width: 256px; height: 256px; user-select: none; border: 0px; padding: 0px; margin: 0px; max-width: none;"
                    />
                  </div>
                  <div
                    style="position: absolute; left: 1024px; top: 256px; width: 256px; height: 256px; transition: opacity 200ms linear 0s;"
                  >
                    <img
                      draggable="false"
                      alt
                      role="presentation"
                      src="https://maps.googleapis.com/maps/vt?pb=!1m5!1m4!1i13!2i2416!3i3079!4i256!2m3!1e0!2sm!3i503220532!2m3!1e2!6m1!3e5!3m17!2snl-BE!3sUS!5e18!12m4!1e68!2m2!1sset!2sRoadmap!12m3!1e37!2m1!1ssmartmaps!12m4!1e26!2m2!1sstyles!2zcC5zOi02MHxwLmw6LTYw!4e0!5m1!5f2&amp;key=AIzaSyDTTfWur0PDbZWPr7Pmq8K3jiDp0_xUziI&amp;token=51001"
                      style="width: 256px; height: 256px; user-select: none; border: 0px; padding: 0px; margin: 0px; max-width: none;"
                    />
                  </div>
                </div>
              </div>
            </div>
            <div
              class="gm-style-pbc"
              style="z-index: 2; position: absolute; height: 100%; width: 100%; padding: 0px; border-width: 0px; margin: 0px; left: 0px; top: 0px; opacity: 0;"
            >
              <p class="gm-style-pbt"></p>
            </div>
            <div
              style="z-index: 3; position: absolute; height: 100%; width: 100%; padding: 0px; border-width: 0px; margin: 0px; left: 0px; top: 0px; touch-action: pan-x pan-y;"
            >
              <div
                style="z-index: 4; position: absolute; left: 50%; top: 50%; width: 100%; transform: translate(0px, 0px);"
              >
                <div style="position: absolute; left: 0px; top: 0px; z-index: 104; width: 100%;"></div>
                <div style="position: absolute; left: 0px; top: 0px; z-index: 105; width: 100%;"></div>
                <div style="position: absolute; left: 0px; top: 0px; z-index: 106; width: 100%;">
                  <div
                    style="width: 27px; height: 43px; overflow: hidden; position: absolute; opacity: 0; left: -14px; top: -43px; z-index: 0;"
                  >
                    <img
                      alt
                      src="https://maps.gstatic.com/mapfiles/api-3/images/spotlight-poi2_hdpi.png"
                      draggable="false"
                      usemap="#gmimap0"
                      style="position: absolute; left: 0px; top: 0px; width: 27px; height: 43px; user-select: none; border: 0px; padding: 0px; margin: 0px; max-width: none; opacity: 1;"
                    />
                    <map name="gmimap0" id="gmimap0">
                      <area
                        log="miw"
                        coords="13.5, 0, 4, 3.75, 0, 13.5, 13.5, 43, 27, 13.5, 23, 3.75"
                        shape="poly"
                        title="Hello World!"
                        style="cursor: pointer; touch-action: none;"
                      />
                    </map>
                  </div>
                </div>
                <div style="position: absolute; left: 0px; top: 0px; z-index: 107; width: 100%;">
                  <div
                    style="cursor: default; position: absolute; top: 0px; left: 0px; z-index: -14;"
                  >
                    <div class="gm-style-iw-a" style="position: absolute; left: -30px; top: 100px;">
                      <div class="gm-style-iw-t" style="right: 0px; bottom: 27px;">
                        <div
                          class="gm-style-iw gm-style-iw-c"
                          style="padding-right: 0px; padding-bottom: 0px; max-width: 654px; max-height: 353px;"
                        >
                          <div
                            class="gm-style-iw-d"
                            style="overflow: scroll; max-width: 636px; max-height: 335px;"
                          >
                            <div dir="ltr" jstcache="0" style>
                              <div jstcache="33" class="poi-info-window gm-style">
                                <div jstcache="2">
                                  <div
                                    jstcache="3"
                                    class="title full-width"
                                    jsan="7.title,7.full-width"
                                  >Union Square Park</div>
                                  <div class="address">
                                    <div
                                      jstcache="4"
                                      jsinstance="0"
                                      class="address-line full-width"
                                      jsan="7.address-line,7.full-width"
                                    >201 Park Ave S</div>
                                    <div
                                      jstcache="4"
                                      jsinstance="*1"
                                      class="address-line full-width"
                                      jsan="7.address-line,7.full-width"
                                    >New York, NY 10003</div>
                                  </div>
                                </div>
                                <div jstcache="5" style="display:none"></div>
                                <div class="view-link">
                                  <a
                                    target="_blank"
                                    jstcache="6"
                                    href="https://maps.google.com/maps?ll=40.748817,-73.985428&amp;z=13&amp;t=m&amp;hl=nl-BE&amp;gl=US&amp;mapclient=apiv3&amp;cid=3052454967964678304"
                                  >
                                    <span>Weergeven in Google Maps</span>
                                  </a>
                                </div>
                              </div>
                            </div>
                          </div>
                          <button
                            draggable="false"
                            title="Sluiten"
                            aria-label="Sluiten"
                            type="button"
                            class="gm-ui-hover-effect"
                            style="background: none; display: block; border: 0px; margin: 0px; padding: 0px; position: absolute; cursor: pointer; user-select: none; top: -6px; right: -6px; width: 30px; height: 30px;"
                          >
                            <img
                              src="data:image/svg+xml,%3Csvg%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20width%3D%2224px%22%20height%3D%2224px%22%20viewBox%3D%220%200%2024%2024%22%20fill%3D%22%23000000%22%3E%0A%20%20%20%20%3Cpath%20d%3D%22M19%206.41L17.59%205%2012%2010.59%206.41%205%205%206.41%2010.59%2012%205%2017.59%206.41%2019%2012%2013.41%2017.59%2019%2019%2017.59%2013.41%2012z%22%2F%3E%0A%20%20%20%20%3Cpath%20d%3D%22M0%200h24v24H0z%22%20fill%3D%22none%22%2F%3E%0A%3C%2Fsvg%3E%0A"
                              style="pointer-events: none; display: block; width: 14px; height: 14px; margin: 8px;"
                            />
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <iframe
            aria-hidden="true"
            frameborder="0"
            tabindex="-1"
            style="z-index: -1; position: absolute; width: 100%; height: 100%; top: 0px; left: 0px; border: none;"
          ></iframe>
          <div
            style="margin-left: 5px; margin-right: 5px; z-index: 1000000; position: absolute; left: 0px; bottom: 0px;"
          >
            <a
              target="_blank"
              rel="noopener"
              href="https://maps.google.com/maps?ll=40.748817,-73.985428&amp;z=13&amp;t=m&amp;hl=nl-BE&amp;gl=US&amp;mapclient=apiv3"
              title="Dit gebied openen in Google Maps (er wordt een nieuw venster geopend)"
              style="position: static; overflow: visible; float: none; display: inline;"
            >
              <div style="width: 66px; height: 26px; cursor: pointer;">
                <img
                  alt
                  src="https://maps.gstatic.com/mapfiles/api-3/images/google_white5_hdpi.png"
                  draggable="false"
                  style="position: absolute; left: 0px; top: 0px; width: 66px; height: 26px; user-select: none; border: 0px; padding: 0px; margin: 0px;"
                />
              </div>
            </a>
          </div>
          <div
            style="background-color: white; padding: 15px 21px; border: 1px solid rgb(171, 171, 171); font-family: Roboto, Arial, sans-serif; color: rgb(34, 34, 34); box-sizing: border-box; box-shadow: rgba(0, 0, 0, 0.2) 0px 4px 16px; z-index: 10000002; display: none; width: 300px; height: 180px; position: absolute; left: 490px; top: 160px;"
          >
            <div
              style="padding: 0px 0px 10px; font-size: 16px; box-sizing: border-box;"
            >Kaartgegevens</div>
            <div style="font-size: 13px;">Kaartgegevens ©2020 Google</div>
            <button
              draggable="false"
              title="Sluiten"
              aria-label="Sluiten"
              type="button"
              class="gm-ui-hover-effect"
              style="background: none; display: block; border: 0px; margin: 0px; padding: 0px; position: absolute; cursor: pointer; user-select: none; top: 0px; right: 0px; width: 37px; height: 37px;"
            >
              <img
                src="data:image/svg+xml,%3Csvg%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20width%3D%2224px%22%20height%3D%2224px%22%20viewBox%3D%220%200%2024%2024%22%20fill%3D%22%23000000%22%3E%0A%20%20%20%20%3Cpath%20d%3D%22M19%206.41L17.59%205%2012%2010.59%206.41%205%205%206.41%2010.59%2012%205%2017.59%206.41%2019%2012%2013.41%2017.59%2019%2019%2017.59%2013.41%2012z%22%2F%3E%0A%20%20%20%20%3Cpath%20d%3D%22M0%200h24v24H0z%22%20fill%3D%22none%22%2F%3E%0A%3C%2Fsvg%3E%0A"
                style="pointer-events: none; display: block; width: 13px; height: 13px; margin: 12px;"
              />
            </button>
          </div>
          <div
            class="gmnoprint"
            style="z-index: 1000001; position: absolute; right: 235px; bottom: 0px; width: 145px;"
          >
            <div
              draggable="false"
              class="gm-style-cc"
              style="user-select: none; height: 14px; line-height: 14px;"
            >
              <div style="opacity: 0.7; width: 100%; height: 100%; position: absolute;">
                <div style="width: 1px;"></div>
                <div
                  style="background-color: rgb(245, 245, 245); width: auto; height: 100%; margin-left: 1px;"
                ></div>
              </div>
              <div
                style="position: relative; padding-right: 6px; padding-left: 6px; box-sizing: border-box; font-family: Roboto, Arial, sans-serif; font-size: 10px; color: rgb(68, 68, 68); white-space: nowrap; direction: ltr; text-align: right; vertical-align: middle; display: inline-block;"
              >
                <a style="text-decoration: none; cursor: pointer; display: none;">Kaartgegevens</a>
                <span>Kaartgegevens ©2020 Google</span>
              </div>
            </div>
          </div>
          <div class="gmnoscreen" style="position: absolute; right: 0px; bottom: 0px;">
            <div
              style="font-family: Roboto, Arial, sans-serif; font-size: 11px; color: rgb(68, 68, 68); direction: ltr; text-align: right; background-color: rgb(245, 245, 245);"
            >Kaartgegevens ©2020 Google</div>
          </div>
          <div
            class="gmnoprint gm-style-cc"
            draggable="false"
            style="z-index: 1000001; user-select: none; height: 14px; line-height: 14px; position: absolute; right: 126px; bottom: 0px;"
          >
            <div style="opacity: 0.7; width: 100%; height: 100%; position: absolute;">
              <div style="width: 1px;"></div>
              <div
                style="background-color: rgb(245, 245, 245); width: auto; height: 100%; margin-left: 1px;"
              ></div>
            </div>
            <div
              style="position: relative; padding-right: 6px; padding-left: 6px; box-sizing: border-box; font-family: Roboto, Arial, sans-serif; font-size: 10px; color: rgb(68, 68, 68); white-space: nowrap; direction: ltr; text-align: right; vertical-align: middle; display: inline-block;"
            >
              <a
                href="https://www.google.com/intl/nl-BE_US/help/terms_maps.html"
                target="_blank"
                rel="noopener"
                style="text-decoration: none; cursor: pointer; color: rgb(68, 68, 68);"
              >Gebruiksvoorwaarden</a>
            </div>
          </div>
          <button
            draggable="false"
            title="Weergave op volledig scherm in- of uitschakelen"
            aria-label="Weergave op volledig scherm in- of uitschakelen"
            type="button"
            class="gm-control-active gm-fullscreen-control"
            style="background: none rgb(255, 255, 255); border: 0px; margin: 10px; padding: 0px; position: absolute; cursor: pointer; user-select: none; border-radius: 2px; height: 40px; width: 40px; box-shadow: rgba(0, 0, 0, 0.3) 0px 1px 4px -1px; overflow: hidden; top: 0px; right: 0px;"
          >
            <img
              src="data:image/svg+xml,%3Csvg%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20width%3D%2218%22%20height%3D%2218%22%20viewBox%3D%220%20018%2018%22%3E%0A%20%20%3Cpath%20fill%3D%22%23666%22%20d%3D%22M0%2C0v2v4h2V2h4V0H2H0z%20M16%2C0h-4v2h4v4h2V2V0H16z%20M16%2C16h-4v2h4h2v-2v-4h-2V16z%20M2%2C12H0v4v2h2h4v-2H2V12z%22%2F%3E%0A%3C%2Fsvg%3E%0A"
              style="height: 18px; width: 18px;"
            />
            <img
              src="data:image/svg+xml,%3Csvg%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20width%3D%2218%22%20height%3D%2218%22%20viewBox%3D%220%200%2018%2018%22%3E%0A%20%20%3Cpath%20fill%3D%22%23333%22%20d%3D%22M0%2C0v2v4h2V2h4V0H2H0z%20M16%2C0h-4v2h4v4h2V2V0H16z%20M16%2C16h-4v2h4h2v-2v-4h-2V16z%20M2%2C12H0v4v2h2h4v-2H2V12z%22%2F%3E%0A%3C%2Fsvg%3E%0A"
              style="height: 18px; width: 18px;"
            />
            <img
              src="data:image/svg+xml,%3Csvg%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20width%3D%2218%22%20height%3D%2218%22%20viewBox%3D%220%200%2018%2018%22%3E%0A%20%20%3Cpath%20fill%3D%22%23111%22%20d%3D%22M0%2C0v2v4h2V2h4V0H2H0z%20M16%2C0h-4v2h4v4h2V2V0H16z%20M16%2C16h-4v2h4h2v-2v-4h-2V16z%20M2%2C12H0v4v2h2h4v-2H2V12z%22%2F%3E%0A%3C%2Fsvg%3E%0A"
              style="height: 18px; width: 18px;"
            />
          </button>
          <div
            draggable="false"
            class="gm-style-cc"
            style="user-select: none; height: 14px; line-height: 14px; position: absolute; right: 0px; bottom: 0px;"
          >
            <div style="opacity: 0.7; width: 100%; height: 100%; position: absolute;">
              <div style="width: 1px;"></div>
              <div
                style="background-color: rgb(245, 245, 245); width: auto; height: 100%; margin-left: 1px;"
              ></div>
            </div>
            <div
              style="position: relative; padding-right: 6px; padding-left: 6px; box-sizing: border-box; font-family: Roboto, Arial, sans-serif; font-size: 10px; color: rgb(68, 68, 68); white-space: nowrap; direction: ltr; text-align: right; vertical-align: middle; display: inline-block;"
            >
              <a
                target="_blank"
                rel="noopener"
                title="Fouten in de wegenkaart of beelden melden aan Google"
                href="https://www.google.com/maps/@40.748817,-73.985428,13z/data=!10m1!1e1!12b1?source=apiv3&amp;rapsrc=apiv3"
                style="font-family: Roboto, Arial, sans-serif; font-size: 10px; color: rgb(68, 68, 68); text-decoration: none; position: relative;"
              >Een kaartfout rapporteren</a>
            </div>
          </div>
          <div
            class="gmnoprint gm-bundled-control gm-bundled-control-on-bottom"
            draggable="false"
            controlwidth="40"
            controlheight="81"
            style="margin: 10px; user-select: none; position: absolute; bottom: 95px; right: 40px;"
          >
            <div
              class="gmnoprint"
              controlwidth="40"
              controlheight="81"
              style="position: absolute; left: 0px; top: 0px;"
            >
              <div
                draggable="false"
                style="user-select: none; box-shadow: rgba(0, 0, 0, 0.3) 0px 1px 4px -1px; border-radius: 2px; cursor: pointer; background-color: rgb(255, 255, 255); width: 40px; height: 81px;"
              >
                <button
                  draggable="false"
                  title="Inzoomen"
                  aria-label="Inzoomen"
                  type="button"
                  class="gm-control-active"
                  style="background: none; display: block; border: 0px; margin: 0px; padding: 0px; position: relative; cursor: pointer; user-select: none; overflow: hidden; width: 40px; height: 40px; top: 0px; left: 0px;"
                >
                  <img
                    src="data:image/svg+xml,%3Csvg%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20width%3D%2218%22%20height%3D%2218%22%20viewBox%3D%220%200%2018%2018%22%3E%0A%20%20%3Cpolygon%20fill%3D%22%23666%22%20points%3D%2218%2C7%2011%2C7%2011%2C0%207%2C0%207%2C7%200%2C7%200%2C11%207%2C11%207%2C18%2011%2C18%2011%2C11%2018%2C11%22%2F%3E%0A%3C%2Fsvg%3E%0A"
                    style="height: 18px; width: 18px;"
                  />
                  <img
                    src="data:image/svg+xml,%3Csvg%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20width%3D%2218%22%20height%3D%2218%22%20viewBox%3D%220%200%2018%2018%22%3E%0A%20%20%3Cpolygon%20fill%3D%22%23333%22%20points%3D%2218%2C7%2011%2C7%2011%2C0%207%2C0%207%2C7%200%2C7%200%2C11%207%2C11%207%2C18%2011%2C18%2011%2C11%2018%2C11%22%2F%3E%0A%3C%2Fsvg%3E%0A"
                    style="height: 18px; width: 18px;"
                  />
                  <img
                    src="data:image/svg+xml,%3Csvg%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20width%3D%2218%22%20height%3D%2218%22%20viewBox%3D%220%200%2018%2018%22%3E%0A%20%20%3Cpolygon%20fill%3D%22%23111%22%20points%3D%2218%2C7%2011%2C7%2011%2C0%207%2C0%207%2C7%200%2C7%200%2C11%207%2C11%207%2C18%2011%2C18%2011%2C11%2018%2C11%22%2F%3E%0A%3C%2Fsvg%3E%0A"
                    style="height: 18px; width: 18px;"
                  />
                </button>
                <div
                  style="position: relative; overflow: hidden; width: 30px; height: 1px; margin: 0px 5px; background-color: rgb(230, 230, 230); top: 0px;"
                ></div>
                <button
                  draggable="false"
                  title="Uitzoomen"
                  aria-label="Uitzoomen"
                  type="button"
                  class="gm-control-active"
                  style="background: none; display: block; border: 0px; margin: 0px; padding: 0px; position: relative; cursor: pointer; user-select: none; overflow: hidden; width: 40px; height: 40px; top: 0px; left: 0px;"
                >
                  <img
                    src="data:image/svg+xml,%3Csvg%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20width%3D%2218%22%20height%3D%2218%22%20viewBox%3D%220%200%2018%2018%22%3E%0A%20%20%3Cpath%20fill%3D%22%23666%22%20d%3D%22M0%2C7h18v4H0V7z%22%2F%3E%0A%3C%2Fsvg%3E%0A"
                    style="height: 18px; width: 18px;"
                  />
                  <img
                    src="data:image/svg+xml,%3Csvg%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20width%3D%2218%22%20height%3D%2218%22%20viewBox%3D%220%200%2018%2018%22%3E%0A%20%20%3Cpath%20fill%3D%22%23333%22%20d%3D%22M0%2C7h18v4H0V7z%22%2F%3E%0A%3C%2Fsvg%3E%0A"
                    style="height: 18px; width: 18px;"
                  />
                  <img
                    src="data:image/svg+xml,%3Csvg%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20width%3D%2218%22%20height%3D%2218%22%20viewBox%3D%220%200%2018%2018%22%3E%0A%20%20%3Cpath%20fill%3D%22%23111%22%20d%3D%22M0%2C7h18v4H0V7z%22%2F%3E%0A%3C%2Fsvg%3E%0A"
                    style="height: 18px; width: 18px;"
                  />
                </button>
              </div>
            </div>
            <div
              class="gmnoprint"
              controlwidth="40"
              controlheight="40"
              style="display: none; position: absolute;"
            >
              <div style="width: 40px; height: 40px;">
                <button
                  draggable="false"
                  title="Kaart 90 graden draaien"
                  aria-label="Kaart 90 graden draaien"
                  type="button"
                  class="gm-control-active"
                  style="background: none rgb(255, 255, 255); display: none; border: 0px; margin: 0px 0px 32px; padding: 0px; position: relative; cursor: pointer; user-select: none; width: 40px; height: 40px; top: 0px; left: 0px; overflow: hidden; box-shadow: rgba(0, 0, 0, 0.3) 0px 1px 4px -1px; border-radius: 2px;"
                >
                  <img
                    src="data:image/svg+xml,%3Csvg%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20width%3D%2224%22%20height%3D%2222%22%20viewBox%3D%220%200%2024%2022%22%3E%0A%20%20%3Cpath%20fill%3D%22%23666%22%20fill-rule%3D%22evenodd%22%20d%3D%22M20%2010c0-5.52-4.48-10-10-10s-10%204.48-10%2010v5h5v-5c0-2.76%202.24-5%205-5s5%202.24%205%205v5h-4l6.5%207%206.5-7h-4v-5z%22%20clip-rule%3D%22evenodd%22%2F%3E%0A%3C%2Fsvg%3E%0A"
                    style="height: 18px; width: 18px;"
                  />
                  <img
                    src="data:image/svg+xml,%3Csvg%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20width%3D%2224%22%20height%3D%2222%22%20viewBox%3D%220%200%2024%2022%22%3E%0A%20%20%3Cpath%20fill%3D%22%23333%22%20fill-rule%3D%22evenodd%22%20d%3D%22M20%2010c0-5.52-4.48-10-10-10s-10%204.48-10%2010v5h5v-5c0-2.76%202.24-5%205-5s5%202.24%205%205v5h-4l6.5%207%206.5-7h-4v-5z%22%20clip-rule%3D%22evenodd%22%2F%3E%0A%3C%2Fsvg%3E%0A"
                    style="height: 18px; width: 18px;"
                  />
                  <img
                    src="data:image/svg+xml,%3Csvg%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20width%3D%2224%22%20height%3D%2222%22%20viewBox%3D%220%200%2024%2022%22%3E%0A%20%20%3Cpath%20fill%3D%22%23111%22%20fill-rule%3D%22evenodd%22%20d%3D%22M20%2010c0-5.52-4.48-10-10-10s-10%204.48-10%2010v5h5v-5c0-2.76%202.24-5%205-5s5%202.24%205%205v5h-4l6.5%207%206.5-7h-4v-5z%22%20clip-rule%3D%22evenodd%22%2F%3E%0A%3C%2Fsvg%3E%0A"
                    style="height: 18px; width: 18px;"
                  />
                </button>
                <button
                  draggable="false"
                  title="Kaart kantelen"
                  aria-label="Kaart kantelen"
                  type="button"
                  class="gm-tilt gm-control-active"
                  style="background: none rgb(255, 255, 255); display: block; border: 0px; margin: 0px; padding: 0px; position: relative; cursor: pointer; user-select: none; width: 40px; height: 40px; top: 0px; left: 0px; overflow: hidden; box-shadow: rgba(0, 0, 0, 0.3) 0px 1px 4px -1px; border-radius: 2px;"
                >
                  <img
                    src="data:image/svg+xml,%3Csvg%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20width%3D%2218px%22%20height%3D%2216px%22%20viewBox%3D%220%200%2018%2016%22%3E%0A%20%20%3Cpath%20fill%3D%22%23666%22%20d%3D%22M0%2C16h8V9H0V16z%20M10%2C16h8V9h-8V16z%20M0%2C7h8V0H0V7z%20M10%2C0v7h8V0H10z%22%2F%3E%0A%3C%2Fsvg%3E%0A"
                    style="width: 18px;"
                  />
                  <img
                    src="data:image/svg+xml,%3Csvg%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20width%3D%2218px%22%20height%3D%2216px%22%20viewBox%3D%220%200%2018%2016%22%3E%0A%20%20%3Cpath%20fill%3D%22%23333%22%20d%3D%22M0%2C16h8V9H0V16z%20M10%2C16h8V9h-8V16z%20M0%2C7h8V0H0V7z%20M10%2C0v7h8V0H10z%22%2F%3E%0A%3C%2Fsvg%3E%0A"
                    style="width: 18px;"
                  />
                  <img
                    src="data:image/svg+xml,%3Csvg%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20width%3D%2218px%22%20height%3D%2216px%22%20viewBox%3D%220%200%2018%2016%22%3E%0A%20%20%3Cpath%20fill%3D%22%23111%22%20d%3D%22M0%2C16h8V9H0V16z%20M10%2C16h8V9h-8V16z%20M0%2C7h8V0H0V7z%20M10%2C0v7h8V0H10z%22%2F%3E%0A%3C%2Fsvg%3E%0A"
                    style="width: 18px;"
                  />
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div
        style="background-color: white; font-weight: 500; font-family: Roboto, sans-serif; padding: 15px 25px; box-sizing: border-box; top: 5px; border: 1px solid rgba(0, 0, 0, 0.12); border-radius: 5px; left: 50%; max-width: 375px; position: absolute; transform: translateX(-50%); width: calc(100% - 10px); z-index: 1;"
      >
        <div>
          <img
            alt
            src="https://maps.gstatic.com/mapfiles/api-3/images/google_gray.svg"
            draggable="false"
            style="padding: 0px; margin: 0px; border: 0px; height: 17px; vertical-align: middle; width: 52px; user-select: none;"
          />
        </div>
        <div style="line-height: 20px; margin: 15px 0px;">
          <span
            style="color: rgba(0, 0, 0, 0.87); font-size: 14px;"
          >Google Maps kan niet correct geladen worden op deze pagina.</span>
        </div>
        <table style="width: 100%;">
          <tr>
            <td style="line-height: 16px; vertical-align: middle;">
              <a
                href="https://developers.google.com/maps/documentation/javascript/error-messages?utm_source=maps_js&amp;utm_medium=degraded&amp;utm_campaign=billing#api-key-and-billing-errors"
                target="_blank"
                rel="noopener"
                style="color: rgba(0, 0, 0, 0.54); font-size: 12px;"
              >Bent u eigenaar van deze website?</a>
            </td>
            <td style="text-align: right;">
              <button class="dismissButton">OK</button>
            </td>
          </tr>
        </table>
      </div>
    </div>
  </section>
  <!-- end Contact -->
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
import { ValidationObserver, ValidationProvider } from 'vee-validate';

@Component({
  components: {
    Icon: () => import(/* webpackChunkName: 'icon' */ '@/components/Icon.vue'),
    Card: () => import(/* webpackChunkName: 'card' */ '@/components/Card.vue'),
    Badge: () =>
      import(/* webpackChunkName: 'badge' */ '@/components/Badge.vue'),
    BaseInput: () =>
      import(/* webpackChunkName: 'base-input' */ '@/components/BaseInput.vue'),
    ValidationObserver,
    ValidationProvider
  }
})
export default class Contact extends Vue {
  private email = '';
  private model = {
    name: '',
    message: ''
  };
}
</script>

<style scoped>
.skew-separator {
  margin-top: -220px !important;
}

.skew-separator.skew-top:after {
  height: 370px !important;
  top: -220px !important;
}

.skew-separator:after {
  content: '';
  position: absolute;
  width: 100%;
  height: 800px;
  transform: skewY(-8deg);
  background: #fff;
  top: 88%;
  z-index: 1;
}
</style>
