<template>
  <div class="tf-page">
    <!-- Hero 区域 -->
    <section class="tf-hero">
      <div class="tf-hero-content">
        <div class="tf-badge">✈️ TestFlight 内测</div>
        <h1 class="tf-title display-text">申请内测资格</h1>
        <p class="tf-subtitle">提交您的购买凭证，我们将在 24 小时内审核并向您发送 TestFlight 邀请链接</p>
      </div>
    </section>

    <!-- 申请表单 -->
    <section class="tf-form-section">
      <div class="tf-container">
        <!-- 成功状态 -->
        <div v-if="submitted" class="success-card glass-card">
          <div class="success-icon">🎉</div>
          <h2>申请已提交！</h2>
          <p>感谢您的申请，我们会尽快审核。<br>通过后将以邮件形式发送 TestFlight 邀请链接。</p>
          <p class="success-note">申请编号：<strong>#{{ submittedId }}</strong></p>
          <button class="btn-primary" @click="resetForm">再次申请</button>
        </div>

        <!-- 申请表单 -->
        <div v-else class="form-card glass-card">
          <form @submit.prevent="submitForm">

            <!-- 当前申请的应用 -->
            <div class="form-group">
              <label class="form-label">您正在申请 <span class="required">*</span></label>
              <div class="selected-app-display" v-if="selectedApp">
                <div class="app-badge-elegant">
                  <img loading="lazy" :src="getAppImage(selectedApp.id)" :alt="selectedApp.name" class="app-real-icon" />
                  <span class="app-label">{{ selectedApp.name }}</span>
                </div>
              </div>
              <div v-else>
                <select v-model="form.app_id" class="form-input" :class="{ error: errors.app_id }">
                  <option value="" disabled>请选择要申请的应用</option>
                  <option v-for="app in APP_LIST" :key="app.id" :value="app.id">
                    {{ app.name }}
                  </option>
                </select>
                <p v-if="errors.app_id" class="field-error">{{ errors.app_id }}</p>
              </div>
            </div>

            <!-- 邮箱 -->
            <div class="form-group">
              <label class="form-label" for="email">联系邮箱 <span class="required">*</span></label>
              <input
                id="email"
                v-model="form.email"
                type="email"
                class="form-input"
                :class="{ error: errors.email }"
                placeholder="your@email.com"
                autocomplete="email"
              />
              <p v-if="errors.email" class="field-error">{{ errors.email }}</p>
              <p class="field-hint">TestFlight 邀请链接将发送至此邮箱</p>
            </div>

            <!-- 订单 ID -->
            <div class="form-group">
              <label class="form-label" for="order_id">订单 ID <span class="required">*</span></label>
              <input
                id="order_id"
                v-model="form.order_id"
                type="text"
                class="form-input"
                :class="{ error: errors.order_id }"
                placeholder="请输入您的购买订单号"
              />
              <p v-if="errors.order_id" class="field-error">{{ errors.order_id }}</p>
              <p class="field-hint">可在 App Store 或支付平台的购买记录中找到</p>
            </div>

            <!-- iCloud 账号（选填） -->
            <div class="form-group">
              <label class="form-label" for="icloud">
                iCloud 账号
                <span class="optional-badge">选填</span>
              </label>
              <input
                id="icloud"
                v-model="form.icloud"
                type="email"
                class="form-input"
                placeholder="your@icloud.com（可不填）"
                autocomplete="off"
              />
              <p class="field-hint">填写后可加快审核速度</p>
            </div>

            <!-- 订单截图 -->
            <div class="form-group">
              <label class="form-label">
                订单截图
                <span class="optional-badge">选填</span>
              </label>

              <!-- 上传区域 -->
              <div
                class="upload-zone"
                :class="{ 'drag-over': isDragOver, 'has-file': previewUrl, 'uploading': uploading }"
                @click="!uploading && $refs.fileInput.click()"
                @dragover.prevent="isDragOver = true"
                @dragleave="isDragOver = false"
                @drop.prevent="handleDrop"
              >
                <input
                  ref="fileInput"
                  type="file"
                  accept="image/*"
                  class="hidden-input"
                  @change="handleFileChange"
                />

                <!-- 预览图 -->
                <div v-if="previewUrl" class="preview-wrapper">
                  <img loading="lazy" :src="previewUrl" alt="订单截图预览" class="preview-img" />
                  <button type="button" class="remove-img" @click.stop="removeImage">✕</button>
                </div>

                <!-- 上传中 -->
                <div v-else-if="uploading" class="upload-state">
                  <div class="spinner"></div>
                  <p>上传中 {{ uploadProgress }}%</p>
                </div>

                <!-- 空状态 -->
                <div v-else class="upload-state">
                  <div class="upload-icon">📷</div>
                  <p class="upload-text">点击或拖拽图片到此处</p>
                  <p class="upload-hint">支持 JPG、PNG、WebP，最大 5MB</p>
                </div>
              </div>
              <p v-if="errors.screenshot" class="field-error">{{ errors.screenshot }}</p>
            </div>

            <!-- 提交按钮 -->
            <div class="form-actions">
              <p v-if="submitError" class="submit-error">⚠️ {{ submitError }}</p>
              <button
                type="submit"
                class="btn-submit btn-primary"
                :disabled="loading || uploading"
              >
                <span v-if="loading" class="spinner-sm"></span>
                <span v-else-if="uploading">截图上传中...</span>
                <span v-else>提交申请 →</span>
              </button>
            </div>

          </form>
        </div>

        <!-- 说明卡片 -->
        <div class="info-cards">
          <div class="info-card glass-card">
            <div class="info-icon">⏱️</div>
            <h3>审核时效</h3>
            <p>提交后 24 小时内完成审核，工作日更快</p>
          </div>
          <div class="info-card glass-card">
            <div class="info-icon">📧</div>
            <h3>邮件通知</h3>
            <p>审核通过后，邀请链接将发送至您的邮箱</p>
          </div>
          <div class="info-card glass-card">
            <div class="info-icon">🔒</div>
            <h3>数据安全</h3>
            <p>您的信息仅用于资格验证，不会被泄露</p>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<script setup>
import { ref, reactive, computed } from 'vue';
import { useRoute } from 'vue-router';

const props = defineProps({
  appId: { type: String, default: '' }
});

// App 清单（与后端 apply.js 保持一致，方便扩展）
const APP_LIST = [
  { id: 'thl-browser', name: '糖葫芦浏览器', icon: '🌐' },
  { id: 'thl-screen',  name: '糖葫芦投屏',   icon: '📡' },
  { id: 'thl-play',   name: '糖葫芦享屏',   icon: '🎬' },
  { id: 'thl-tv',     name: '糖葫芦TV',     icon: '📺' },
  { id: 'thl-pdf',    name: '糖葫芦PDF',    icon: '📄' },
  { id: 'thl-watch',  name: '糖葫芦修仙',   icon: '⌚' },
  { id: 'thl-send',   name: '糖葫芦投送',   icon: '🚀' },
  { id: 'thl-dytv',   name: '糖葫芦视界',   icon: '🎭' },
];

function getAppImage(id) {
  const map = {
    'thl-browser': new URL('../assets/thlbrowser.png', import.meta.url).href,
    'thl-screen': new URL('../assets/thlairplay.png', import.meta.url).href,
    'thl-play': new URL('../assets/play/logo.png', import.meta.url).href,
    'thl-tv': new URL('../assets/thltv.jpg', import.meta.url).href,
    'thl-pdf': new URL('../assets/thlpdf.jpg', import.meta.url).href,
    'thl-send': new URL('../assets/thlsend.png', import.meta.url).href,
    'thl-dytv': new URL('../assets/dytv/logo.png', import.meta.url).href,
    'thl-watch': new URL('../assets/watch/xiuxian_logo.jpg', import.meta.url).href,
  };
  return map[id] || '';
}

const route = useRoute();

const form = reactive({
  app_id: route.query.app_id || props.appId || '',
  email: '',
  order_id: '',
  icloud: '',
  screenshot_url: '',
});

const selectedApp = computed(() => APP_LIST.find(a => a.id === form.app_id));

const errors = reactive({});
const loading = ref(false);
const submitted = ref(false);
const submittedId = ref(null);
const submitError = ref('');

// 截图上传
const fileInput = ref(null);
const previewUrl = ref('');
const uploading = ref(false);
const uploadProgress = ref(0);
const isDragOver = ref(false);

function validate() {
  Object.keys(errors).forEach(k => delete errors[k]);
  if (!form.app_id) errors.app_id = '请选择要申请的应用';
  if (!form.email || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email))
    errors.email = '请输入有效的邮箱地址';
  if (!form.order_id || form.order_id.trim().length < 3)
    errors.order_id = '请输入有效的订单 ID';
  return Object.keys(errors).length === 0;
}

async function handleFileChange(e) {
  const file = e.target.files[0];
  if (file) await uploadFile(file);
}

function handleDrop(e) {
  isDragOver.value = false;
  const file = e.dataTransfer.files[0];
  if (file && file.type.startsWith('image/')) uploadFile(file);
}

async function uploadFile(file) {
  if (file.size > 5 * 1024 * 1024) {
    errors.screenshot = '图片大小不能超过 5MB';
    return;
  }
  delete errors.screenshot;
  previewUrl.value = URL.createObjectURL(file);
  uploading.value = true;
  uploadProgress.value = 0;

  try {
    const fd = new FormData();
    fd.append('file', file);
    const res = await fetch('/api/upload-screenshot', { method: 'POST', body: fd });
    const data = await res.json();
    if (data.url) {
      form.screenshot_url = data.url;
    } else {
      errors.screenshot = data.error || '上传失败';
      previewUrl.value = '';
    }
  } catch {
    errors.screenshot = '上传失败，请检查网络后重试';
    previewUrl.value = '';
  } finally {
    uploading.value = false;
    uploadProgress.value = 100;
  }
}

function removeImage() {
  previewUrl.value = '';
  form.screenshot_url = '';
  if (fileInput.value) fileInput.value.value = '';
}

async function submitForm() {
  if (!validate()) return;
  loading.value = true;
  submitError.value = '';

  try {
    const res = await fetch('/api/apply', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        app_id: form.app_id,
        email: form.email,
        order_id: form.order_id,
        icloud: form.icloud || undefined,
        screenshot_url: form.screenshot_url || undefined,
      }),
    });
    const data = await res.json();
    if (data.success) {
      submitted.value = true;
      submittedId.value = data.id;
    } else {
      submitError.value = data.error || '提交失败，请稍后再试';
    }
  } catch {
    submitError.value = '网络错误，请检查连接后重试';
  } finally {
    loading.value = false;
  }
}

function resetForm() {
  submitted.value = false;
  submittedId.value = null;
  Object.assign(form, { app_id: '', email: '', order_id: '', icloud: '', screenshot_url: '' });
  previewUrl.value = '';
  Object.keys(errors).forEach(k => delete errors[k]);
}
</script>

<style scoped>
.tf-page {
  min-height: 100vh;
  padding-top: var(--nav-height);
}

/* Hero */
.tf-hero {
  padding: 6rem 5% 4rem;
  text-align: center;
}
.tf-hero-content {
  max-width: 640px;
  margin: 0 auto;
}
.tf-badge {
  display: inline-block;
  padding: 0.4rem 1.2rem;
  background: rgba(249, 115, 22, 0.12);
  border: 1px solid rgba(249, 115, 22, 0.3);
  border-radius: 100px;
  font-size: 0.9rem;
  color: var(--accent-blue);
  font-weight: 500;
  margin-bottom: 1.5rem;
  letter-spacing: 0.04em;
}
.tf-title {
  font-size: clamp(2.2rem, 5vw, 3.5rem);
  font-weight: 800;
  margin-bottom: 1.2rem;
  background: var(--accent-gradient);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
  line-height: 1.2;
}
.tf-subtitle {
  color: var(--text-secondary);
  font-size: 1.1rem;
  line-height: 1.8;
}

/* 布局容器 */
.tf-form-section {
  padding: 0 5% 8rem;
}
.tf-container {
  max-width: 720px;
  margin: 0 auto;
}

/* 表单卡片 */
.form-card {
  padding: 3rem;
  margin-bottom: 2rem;
}

/* 表单组 */
.form-group {
  margin-bottom: 2rem;
}
.form-label {
  display: block;
  font-size: 0.95rem;
  font-weight: 600;
  color: var(--text-primary);
  margin-bottom: 0.75rem;
}
.required {
  color: #ef4444;
}
.optional-badge {
  font-size: 0.75rem;
  font-weight: 400;
  color: var(--text-muted);
  background: rgba(255,255,255,0.06);
  border: 1px solid rgba(255,255,255,0.1);
  border-radius: 100px;
  padding: 0.1rem 0.6rem;
  margin-left: 0.5rem;
  vertical-align: middle;
}

/* App 选择按钮网格 */
.app-grid {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(140px, 1fr));
  gap: 0.75rem;
}
.app-btn {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 0.4rem;
  padding: 0.9rem 0.75rem;
  background: rgba(255,255,255,0.04);
  border: 1px solid rgba(255,230,200,0.08);
  border-radius: 14px;
  cursor: pointer;
  color: var(--text-secondary);
  font-size: 0.88rem;
  font-family: inherit;
  transition: all 0.25s ease;
}
.app-btn:hover {
  background: rgba(249,115,22,0.08);
  border-color: rgba(249,115,22,0.25);
  color: var(--text-primary);
  transform: translateY(-1px);
}
.app-btn.active {
  background: rgba(249,115,22,0.15);
  border-color: rgba(249,115,22,0.55);
  color: var(--accent-blue);
  box-shadow: 0 0 0 3px rgba(249,115,22,0.1);
}
.app-icon {
  font-size: 1.5rem;
}
.app-label {
  font-weight: 500;
  text-align: center;
}

/* 输入框 */
.form-input {
  width: 100%;
  padding: 0.9rem 1.1rem;
  background: rgba(255,255,255,0.04);
  border: 1px solid rgba(255,230,200,0.1);
  border-radius: 12px;
  color: var(--text-primary);
  font-size: 1rem;
  font-family: inherit;
  outline: none;
  transition: all 0.25s ease;
}
.form-input::placeholder { color: var(--text-muted); }
.form-input:focus {
  border-color: rgba(249,115,22,0.5);
  background: rgba(249,115,22,0.04);
  box-shadow: 0 0 0 3px rgba(249,115,22,0.1);
}
.form-input.error {
  border-color: #ef4444;
}

.field-hint {
  margin-top: 0.5rem;
  font-size: 0.82rem;
  color: var(--text-muted);
}
.field-error {
  margin-top: 0.5rem;
  font-size: 0.85rem;
  color: #ef4444;
}

/* 上传区域 */
.upload-zone {
  border: 2px dashed rgba(255,230,200,0.15);
  border-radius: 14px;
  min-height: 160px;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  transition: all 0.25s ease;
  overflow: hidden;
  position: relative;
}
.upload-zone:hover,
.upload-zone.drag-over {
  border-color: rgba(249,115,22,0.45);
  background: rgba(249,115,22,0.04);
}
.upload-zone.uploading { cursor: not-allowed; }
.hidden-input { display: none; }
.upload-state {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 0.5rem;
  padding: 2rem;
}
.upload-icon { font-size: 2rem; }
.upload-text {
  color: var(--text-secondary);
  font-size: 0.95rem;
}
.upload-hint {
  color: var(--text-muted);
  font-size: 0.8rem;
}
.preview-wrapper {
  width: 100%;
  max-height: 280px;
  position: relative;
}
.preview-img {
  width: 100%;
  max-height: 280px;
  object-fit: contain;
  display: block;
}
.remove-img {
  position: absolute;
  top: 0.5rem;
  right: 0.5rem;
  width: 28px;
  height: 28px;
  border-radius: 50%;
  background: rgba(0,0,0,0.7);
  border: 1px solid rgba(255,255,255,0.2);
  color: white;
  font-size: 0.8rem;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  transition: all 0.2s ease;
}
.remove-img:hover { background: #ef4444; }

/* 提交区域 */
.form-actions { margin-top: 2.5rem; text-align: center; }
.btn-submit {
  width: 100%;
  padding: 1rem 2rem;
  font-size: 1.05rem;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 0.5rem;
}
.btn-submit:disabled {
  opacity: 0.6;
  cursor: not-allowed;
  transform: none !important;
}
.submit-error {
  color: #ef4444;
  font-size: 0.9rem;
  margin-bottom: 1rem;
}

/* Loading Spinner */
.spinner, .spinner-sm {
  border: 2px solid rgba(255,255,255,0.3);
  border-top-color: white;
  border-radius: 50%;
  animation: spin 0.8s linear infinite;
}
.spinner { width: 28px; height: 28px; }
.spinner-sm { width: 18px; height: 18px; }
@keyframes spin { to { transform: rotate(360deg); } }

/* 成功状态 */
.success-card {
  padding: 4rem 3rem;
  text-align: center;
  margin-bottom: 2rem;
}
.success-icon { font-size: 3.5rem; margin-bottom: 1.2rem; }
.success-card h2 {
  font-size: 1.8rem;
  margin-bottom: 1rem;
}
.success-card p {
  color: var(--text-secondary);
  line-height: 1.8;
  margin-bottom: 1rem;
}
.success-note {
  font-size: 0.9rem;
  color: var(--text-muted);
}
.success-card .btn-primary {
  margin-top: 1.5rem;
}

/* 说明信息卡 */
.info-cards {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 1rem;
}
.info-card {
  padding: 1.5rem;
  text-align: center;
}
.info-icon { font-size: 1.8rem; margin-bottom: 0.75rem; }
.info-card h3 {
  font-size: 0.95rem;
  font-weight: 600;
  margin-bottom: 0.5rem;
}
.info-card p {
  font-size: 0.85rem;
  color: var(--text-muted);
  line-height: 1.6;
}

/* 优雅的应用徽章 */
.app-badge-elegant {
  display: inline-flex;
  align-items: center;
  gap: 16px;
  padding: 14px 28px;
  background: rgba(255, 255, 255, 0.08);
  border: 1px solid rgba(255, 255, 255, 0.15);
  border-radius: 100px;
  backdrop-filter: blur(10px);
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.15);
  margin-top: 8px;
}
.app-badge-elegant .app-real-icon {
  width: 42px;
  height: 42px;
  border-radius: 10px;
  object-fit: cover;
  box-shadow: 0 2px 6px rgba(0,0,0,0.2);
}
.app-badge-elegant .app-label {
  font-size: 20px;
  font-weight: 600;
  color: #fff;
}

/* 响应式 */
@media (max-width: 768px) {
  .form-card { padding: 1.8rem 1.4rem; }
  .app-grid { grid-template-columns: repeat(2, 1fr); }
  .info-cards { grid-template-columns: 1fr; }
  .tf-hero { padding: 4rem 1.5rem 2.5rem; }
  .tf-form-section { padding: 0 1.5rem 5rem; }
}
</style>
