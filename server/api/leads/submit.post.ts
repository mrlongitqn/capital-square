interface LeadPayload {
  name?: string
  phone?: string
  need?: string
  page?: string
}

export default defineEventHandler(async (event) => {
  const body = await readBody<LeadPayload>(event)

  if (!body?.name || !body?.phone) {
    throw createError({ statusCode: 400, statusMessage: 'Vui lòng nhập họ tên và số điện thoại.' })
  }

  const lead = {
    ...body,
    createdAt: new Date().toISOString(),
    userAgent: getHeader(event, 'user-agent') || ''
  }

  return {
    success: true,
    message: 'Đăng ký thành công. Chuyên viên sẽ liên hệ sớm.',
    lead
  }
})
