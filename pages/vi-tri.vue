<script setup lang="ts">
useSeo({
  title: 'Vị trí Capital Square Đà Nẵng',
  description: 'Phân tích vị trí dự án theo liên kết vùng thực tế và tiềm năng khai thác giá trị dài hạn.',
  path: '/vi-tri'
})

const nearPlaces = [
  ['Sông Hàn', '1-2 phút'],
  ['Cầu Rồng', '5 phút'],
  ['Biển Mỹ Khê', '7-10 phút'],
  ['Sân bay quốc tế Đà Nẵng', '15 phút']
]
</script>

<template>
  <main>
    <PageHero title="Vị trí & liên kết vùng" description="Tọa độ bờ Đông sông Hàn giúp cân bằng nhu cầu an cư và đầu tư cho thuê." />
    <section class="section">
      <div class="container split-grid">
        <div class="card">
          <h3 style="margin-top:0">Kết nối nhanh</h3>
          <table style="width:100%">
            <tbody>
              <tr v-for="place in nearPlaces" :key="place[0]">
                <td style="padding:.45rem 0">{{ place[0] }}</td>
                <td style="text-align:right"><strong>{{ place[1] }}</strong></td>
              </tr>
            </tbody>
          </table>
        </div>
        <div class="video-wrap" style="border-color:#e2e8f0;background:#fff">
          <iframe src="https://www.google.com/maps?q=16.0707,108.2332&z=14&output=embed" title="Bản đồ vị trí" loading="lazy" />
        </div>
      </div>
    </section>
  </main>
</template>
