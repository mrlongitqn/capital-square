<script setup lang="ts">
useSeo({
  title: 'Bảng giá Capital Square Đà Nẵng',
  description: 'Cập nhật bảng giá theo giỏ hàng, phân tích phương án tài chính và điểm hòa vốn cho nhà đầu tư.',
  path: '/bang-gia'
})

const rows = [
  ['1PN', '45–55 m²', 'Phù hợp khách độc thân / đầu tư cho thuê'],
  ['2PN', '65–80 m²', 'Thanh khoản tốt cho nhóm gia đình trẻ'],
  ['3PN / Dual key', '85–104 m²', 'Tối ưu khai thác thuê hoặc ở thực cao cấp']
]
</script>

<template>
  <main>
    <PageHero title="Bảng giá và chiến lược tài chính" description="Nhận bảng giá đúng theo thời điểm mở bán để tránh sai lệch thông tin." />
    <section class="section">
      <div class="container">
        <div class="card">
          <table style="width:100%;border-collapse:collapse">
            <thead>
              <tr><th align="left">Sản phẩm</th><th align="left">Diện tích tham khảo</th><th align="left">Định hướng</th></tr>
            </thead>
            <tbody>
              <tr v-for="row in rows" :key="row[0]">
                <td style="padding:.6rem 0">{{ row[0] }}</td>
                <td>{{ row[1] }}</td>
                <td>{{ row[2] }}</td>
              </tr>
            </tbody>
          </table>
          <p style="margin:1rem 0 0;color:#64748b">*Giá bán thực tế thay đổi theo tầng, view, chính sách từng đợt.</p>
        </div>
      </div>
    </section>
  </main>
</template>
