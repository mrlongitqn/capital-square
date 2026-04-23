<script setup lang="ts">
useSeo({
  title: 'Bảng giá Capital Square Đà Nẵng',
  description: 'Cập nhật bảng giá theo giỏ hàng, phân tích phương án tài chính và điểm hòa vốn cho nhà đầu tư.',
  path: '/bang-gia'
})

const rows = [
  ['1PN', '45–55 m²', 'Ưu tiên vốn vừa, cho thuê tốt'],
  ['2PN', '65–80 m²', 'Thanh khoản tốt, phù hợp gia đình trẻ'],
  ['3PN / Dual Key', '85–104 m²', 'Khai thác đa mục tiêu, giá trị giữ tài sản']
]
</script>

<template>
  <main>
    <PageHero title="Bảng giá & phân tích dòng tiền" description="Không chỉ gửi giá: tư vấn theo khẩu vị vốn và thời gian nắm giữ." />
    <section class="section">
      <div class="container split-grid">
        <article class="card">
          <table style="width:100%;border-collapse:collapse">
            <thead>
              <tr><th align="left">Loại căn</th><th align="left">Diện tích</th><th align="left">Nhận định</th></tr>
            </thead>
            <tbody>
              <tr v-for="row in rows" :key="row[0]"><td style="padding:.6rem 0">{{ row[0] }}</td><td>{{ row[1] }}</td><td>{{ row[2] }}</td></tr>
            </tbody>
          </table>
          <p style="margin:.8rem 0 0;color:#64748b">*Giá bán thay đổi theo tầng, view, chính sách và thời điểm ký.</p>
        </article>
        <LeadForm page="bang-gia" />
      </div>
    </section>
  </main>
</template>
