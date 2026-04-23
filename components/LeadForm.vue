<script setup lang="ts">
const name = ref('')
const phone = ref('')
const need = ref('Nhận bảng giá mới nhất')
const loading = ref(false)
const message = ref('')

const props = defineProps<{ page: string }>()

const submit = async () => {
  loading.value = true
  message.value = ''
  try {
    const result = await $fetch('/api/leads/submit', {
      method: 'POST',
      body: {
        name: name.value,
        phone: phone.value,
        need: need.value,
        page: props.page
      }
    })

    message.value = result.message
    name.value = ''
    phone.value = ''
  } catch (err: any) {
    message.value = err?.data?.statusMessage || 'Không thể gửi yêu cầu lúc này.'
  } finally {
    loading.value = false
  }
}
</script>

<template>
  <form class="card" @submit.prevent="submit">
    <h3 style="margin-top:0">Đăng ký nhận tư vấn 1-1</h3>
    <input v-model="name" placeholder="Họ và tên" required class="input" />
    <input v-model="phone" placeholder="Số điện thoại" required class="input" />
    <select v-model="need" class="input">
      <option>Nhận bảng giá mới nhất</option>
      <option>Đăng ký xem nhà mẫu</option>
      <option>Tư vấn chính sách vay</option>
      <option>Yêu cầu hồ sơ pháp lý</option>
    </select>
    <button class="btn btn-primary" :disabled="loading" type="submit">
      {{ loading ? 'Đang gửi...' : 'Gửi yêu cầu' }}
    </button>
    <p v-if="message" style="margin:.6rem 0 0;color:#1d4ed8">{{ message }}</p>
  </form>
</template>
