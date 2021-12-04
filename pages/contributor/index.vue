<template>
  <div class="flex justify-center items-center">
    <div class="lg:grid lg:grid-cols-2 lg:gap-4 sm:flex sm:flex-col mt-20">
      <!--  -->
      <div id="bg" class="card text-center shadow-2xl mx-14 sm:mb-10">
        <figure class="px-10 pt-10">
          <div>
            <img
              src="https://scontent.fbkk13-1.fna.fbcdn.net/v/t1.6435-9/46695892_1982123928509351_3836604456275804160_n.jpg?_nc_cat=108&ccb=1-5&_nc_sid=174925&_nc_eui2=AeGkcdt8309Dd8TiTbz-mZAlHdgg2OHxJj4d2CDY4fEmPqy8hEUK-j6CFXVRbX7XgfW1RBnj-_lOchBrA3RVVNky&_nc_ohc=pu3Bv-ulUuYAX9AofXU&_nc_ht=scontent.fbkk13-1.fna&oh=75863ee931c3af704305d6615e6f5082&oe=61CEAED8"
              class="rounded-xl"
            />
          </div>
        </figure>
        <div class="card-body">
          <h2 class="card-title">Pornwut Thammapatee</h2>

          <p>Student ID: 62130500063</p>
          <p>Possition: Front-End</p>
        </div>
      </div>
      <!--  -->
      <div id="bg" class="card text-center shadow-2xl mx-14 sm:mb-10">
        <figure class="px-10 pt-10">
          <img
            src="https://scontent.fbkk9-2.fna.fbcdn.net/v/t39.30808-6/260420550_4503073509757774_232010375463550564_n.jpg?_nc_cat=105&ccb=1-5&_nc_sid=09cbfe&_nc_eui2=AeFmHhOz-xhX2e61k_H9eC68Gs1cTgqHDE4azVxOCocMTpWt5AtMwV9iE3SPd4aak0COT14zcf9eBuS4hsgfi-KJ&_nc_ohc=PigMbtE7TB8AX_N_W_K&_nc_ht=scontent.fbkk9-2.fna&oh=ab1e7a1927c04d073aa4a4bf3ce79d27&oe=61AF9440"
            class="rounded-xl"
          />
        </figure>
        <div class="card-body">
          <h2 class="card-title">Pattranit Kongsaenkam</h2>

          <p>Student ID: 62130500073</p>
          <p>Possition: Front-End , Design</p>
        </div>
      </div>
      <!--  -->
      <div id="bg" class="card text-center shadow-2xl mx-14 sm:mb-10">
        <figure class="px-10 pt-10">
          <img
            src="https://scontent.fbkk12-3.fna.fbcdn.net/v/t1.6435-9/123269640_982133342272965_3991837066600109047_n.jpg?_nc_cat=102&ccb=1-5&_nc_sid=174925&_nc_eui2=AeHbfr75rCdD2f4L5v3fywXjNMmTPR1geeU0yZM9HWB55TtzITntHN5XeHaAML8Os6Sq9YzKcz0z3NdrGxaOkLq0&_nc_ohc=85tWsZx1cIcAX-hvnxu&_nc_ht=scontent.fbkk12-3.fna&oh=c43ed0780a3c5840b27776ab0e59a3b0&oe=61CFB577"
            class="rounded-xl"
          />
        </figure>
        <div class="card-body">
          <h2 class="card-title">Pattarapol Sangsunee</h2>

          <p>Student ID: 62130500072</p>
          <p>Possition: Dev-Ops</p>
        </div>
      </div>
      <!--  -->
      <div id="bg" class="card text-center shadow-2xl mx-14 sm:mb-10">
        <figure class="px-10 pt-10">
          <img
            src="https://scontent.fbkk12-4.fna.fbcdn.net/v/t1.18169-9/15965176_1175317199255422_7805047654377926282_n.jpg?_nc_cat=110&ccb=1-5&_nc_sid=174925&_nc_eui2=AeGsplvRW-XU9vq80b94o2OaayVs_54NtMdrJWz_ng20x9EYH72cza6pzBwizIrlhMVYI4TJYBDu-z7cvcxjdMYC&_nc_ohc=hUrKn5vyyIQAX87Rpce&_nc_ht=scontent.fbkk12-4.fna&oh=b3807a7765c3e76d8ad36916bd4feee9&oe=61D06C47"
            class="rounded-xl"
          />
        </figure>
        <div class="card-body">
          <h2 class="card-title">Surapong Chamarai</h2>

          <p>Student ID: 62130500100</p>
          <p>Possition: Back-End</p>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  middleware({ store, redirect }) {
    if (store.$auth.user.role === "admin") {
      redirect("./cat");
    }
  },
};
</script>
<style>
img {
  width: auto;
  height: 15rem;
}

#bg {
  background-color: white;
  color: black;
}
</style>
