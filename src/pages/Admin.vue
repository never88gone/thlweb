<template>
  <div class="admin-page">
    
    <!-- 全局 Toast 提示 -->
    <transition name="toast-fade">
      <div v-if="toast.visible" class="toast-message glass-card" :class="'toast-' + toast.type">
        <span class="toast-icon">{{ toast.icon }}</span>
        <div class="toast-content">
          <div class="toast-title">{{ toast.title }}</div>
          <div v-if="toast.desc" class="toast-desc" v-html="toast.desc"></div>
        </div>
        <button class="toast-close" @click="toast.visible = false">✕</button>
      </div>
    </transition>

    <div class="admin-layout">
      <!-- 侧边栏 -->
      <aside class="admin-sidebar glass-card">
        <div class="sidebar-brand">
          <span class="brand-icon">🍡</span>
          <span class="brand-text display-text">后台管理</span>
        </div>
        <nav class="sidebar-nav">
          <span class="nav-group-label">TestFlight</span>
          <button
            class="nav-item"
            :class="{ active: filter.app_id === '' }"
            @click="setAppFilter('')"
          >
            <span class="nav-icon">📋</span> 全部申请
            <span v-if="total" class="nav-badge">{{ total }}</span>
          </button>
          <button
            v-for="app in APP_LIST"
            :key="app.id"
            class="nav-item"
            :class="{ active: filter.app_id === app.id }"
            @click="setAppFilter(app.id)"
          >
            <span class="nav-icon"><img :src="getAppImage(app.id)" class="real-icon-sm" /></span>
            {{ app.name }}
          </button>
        </nav>
      </aside>

      <!-- 主内容区 -->
      <main class="admin-main">
        <!-- 顶部栏 -->
        <header class="admin-header">
          <div>
            <h1 class="admin-title">TestFlight 申请记录</h1>
            <p class="admin-sub">
              {{ filter.app_id ? APP_LIST.find(a => a.id === filter.app_id)?.name + ' · ' : '' }}
              共 {{ total }} 条记录
            </p>
          </div>
          <!-- 状态与时间筛选 -->
          <div class="filters-wrap">
            <select v-model="filter.days" class="time-select">
              <option value="0">全部时间</option>
              <option value="1">最近 24 小时</option>
              <option value="3">最近 3 天</option>
              <option value="7">最近 7 天</option>
            </select>
            <div class="status-tabs">
              <button
                v-for="tab in STATUS_TABS"
                :key="tab.value"
                class="status-tab"
                :class="{ active: filter.status === tab.value }"
                @click="setStatusFilter(tab.value)"
              >
                {{ tab.label }}
              </button>
            </div>
          </div>
        </header>

        <!-- 批量操作栏 -->
        <div v-if="selectedIds.length > 0" class="bulk-actions glass-card">
          <span class="bulk-text">已选择 <strong>{{ selectedIds.length }}</strong> 项</span>
          <div class="bulk-btns">
            <button class="action-btn" @click="copySelectedEmails">📋 复制邮箱</button>
            <button class="action-btn approve" :disabled="bulkUpdating" @click="bulkUpdateStatus('approved', false)">
              ✓ 批量通过
            </button>
            <button class="action-btn reject" :disabled="bulkUpdating" @click="bulkUpdateStatus('rejected', false)">
              ✕ 批量拒绝
            </button>
            <button class="action-btn apple" :disabled="bulkUpdating" @click="bulkUpdateStatus('approved', true)">
              {{ bulkUpdating ? '⏳ 处理中...' : '🚀 导入 TestFlight' }}
            </button>
          </div>
        </div>

        <!-- 权限拦截 -->
        <div v-if="authError" class="empty-state glass-card auth-error">
          <div class="empty-icon">⛔</div>
          <h2 style="margin-bottom: 0.5rem; color: #f87171;">访问受限</h2>
          <p>只有管理员 (never88gone@gmail.com) 才能访问此页面。</p>
          <p style="font-size: 0.85rem; color: var(--text-muted); margin-top: 1rem;">
            请确保已通过 Cloudflare Access 验证身份，或者联系管理员。
          </p>
        </div>

        <!-- 加载中 -->
        <div v-else-if="loading" class="loading-state">
          <div class="spinner-lg"></div>
          <p>加载中...</p>
        </div>

        <!-- 空状态 -->
        <div v-else-if="records.length === 0" class="empty-state glass-card">
          <div class="empty-icon">📭</div>
          <p>暂无申请记录</p>
        </div>

        <!-- 数据表格 -->
        <div v-else class="table-wrapper glass-card">
          <!-- 批量处理遮罩层 -->
          <div v-if="bulkUpdating" class="bulk-overlay glass-card">
            <div class="spinner-lg"></div>
            <p>正在执行自动化操作，请勿关闭页面...</p>
          </div>

          <table class="admin-table">
            <thead>
              <tr>
                <th class="checkbox-col">
                  <input type="checkbox" :checked="isAllSelected" @change="toggleSelectAll" />
                </th>
                <th>ID</th>
                <th>应用</th>
                <th>邮箱</th>
                <th>订单 ID</th>
                <th>iCloud</th>
                <th>截图</th>
                <th>提交时间</th>
                <th>状态</th>
                <th>通过时间</th>
                <th>操作</th>
              </tr>
            </thead>
            <tbody>
              <tr
                v-for="row in records"
                :key="row.id"
                class="table-row"
                :class="'row-' + row.status"
              >
                <td class="checkbox-col">
                  <input type="checkbox" v-model="selectedIds" :value="row.id" />
                </td>
                <td class="cell-id">#{{ row.id }}</td>
                <td>
                  <span class="app-tag"><img :src="getAppImage(row.app_id)" class="real-icon-xs" /> {{ row.app_name }}</span>
                </td>
                <td>
                  <a :href="'mailto:' + row.email" class="email-link">{{ row.email }}</a>
                </td>
                <td>
                  <span class="mono-text">{{ row.order_id }}</span>
                </td>
                <td>
                  <span class="text-muted-cell">{{ row.icloud || '—' }}</span>
                </td>
                <td>
                  <a
                    v-if="row.screenshot_url"
                    :href="row.screenshot_url"
                    target="_blank"
                    class="screenshot-link"
                    title="查看截图"
                  >🖼️ 查看</a>
                  <span v-else class="text-muted-cell">—</span>
                </td>
                <td>
                  <span class="date-text" :title="row.created_at">{{ formatDate(row.created_at) }}</span>
                </td>
                <td>
                  <span class="status-badge" :class="'badge-' + row.status">
                    {{ STATUS_LABELS[row.status] || row.status }}
                  </span>
                </td>
                <td>
                  <span class="date-text" v-if="row.reviewed_at">{{ formatDate(row.reviewed_at) }}</span>
                  <span class="text-muted-cell" v-else>—</span>
                </td>
                <td>
                  <div class="action-btns">
                    <button
                      v-if="row.status !== 'approved'"
                      class="action-btn approve"
                      :disabled="updating === row.id"
                      @click="updateStatus(row, 'approved')"
                      title="通过"
                    >✓ 通过</button>
                    <button
                      v-if="row.status !== 'rejected'"
                      class="action-btn reject"
                      :disabled="updating === row.id"
                      @click="updateStatus(row, 'rejected')"
                      title="拒绝"
                    >✕ 拒绝</button>
                    <button
                      v-if="row.status !== 'pending'"
                      class="action-btn reset"
                      :disabled="updating === row.id"
                      @click="updateStatus(row, 'pending')"
                      title="重置为待审核"
                    >↺ 重置</button>
                  </div>
                </td>
              </tr>
            </tbody>
          </table>
        </div>

        <!-- 分页 -->
        <div v-if="totalPages > 1" class="pagination">
          <button
            class="page-btn"
            :disabled="filter.page <= 1"
            @click="goPage(filter.page - 1)"
          >← 上一页</button>
          <span class="page-info">第 {{ filter.page }} / {{ totalPages }} 页</span>
          <button
            class="page-btn"
            :disabled="filter.page >= totalPages"
            @click="goPage(filter.page + 1)"
          >下一页 →</button>
        </div>
      </main>
    </div>
  </div>
</template>

<script setup>
import { ref, reactive, computed, onMounted, watch } from 'vue';

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

const STATUS_TABS = [
  { value: '',         label: '全部' },
  { value: 'pending',  label: '待审核' },
  { value: 'approved', label: '已通过' },
  { value: 'rejected', label: '已拒绝' },
];

const STATUS_LABELS = {
  pending: '待审核',
  approved: '已通过',
  rejected: '已拒绝',
};

const records = ref([]);
const total   = ref(0);
const loading = ref(false);
const updating = ref(null);

const LIMIT = 20;
const filter = reactive({
  app_id: '',
  status: '',
  days: '0',
  page: 1,
});

const selectedIds = ref([]);
const bulkUpdating = ref(false);
const authError = ref(false);

const toast = reactive({
  visible: false,
  type: 'success', // success, error, warning
  title: '',
  desc: '',
  icon: '✅',
});

let toastTimer = null;
function showToast(type, title, desc = '', duration = 5000) {
  if (toastTimer) clearTimeout(toastTimer);
  toast.type = type;
  toast.title = title;
  toast.desc = desc.replace(/\n/g, '<br/>');
  toast.icon = type === 'success' ? '✅' : (type === 'error' ? '❌' : '⚠️');
  toast.visible = true;
  if (duration > 0) {
    toastTimer = setTimeout(() => { toast.visible = false; }, duration);
  }
}

const totalPages = computed(() => Math.ceil(total.value / LIMIT));

const isAllSelected = computed(() => {
  return records.value.length > 0 && selectedIds.value.length === records.value.length;
});

function toggleSelectAll(e) {
  if (e.target.checked) {
    selectedIds.value = records.value.map(r => r.id);
  } else {
    selectedIds.value = [];
  }
}

async function copySelectedEmails() {
  const emails = records.value
    .filter(r => selectedIds.value.includes(r.id))
    .map(r => r.email)
    .join(',');
  try {
    await navigator.clipboard.writeText(emails);
    showToast('success', '复制成功', `已复制 ${selectedIds.value.length} 个邮箱到剪贴板。`, 3000);
  } catch (e) {
    showToast('error', '复制失败', '浏览器不支持或被阻止，请手动复制。');
  }
}

async function bulkUpdateStatus(status, auto_invite = false) {
  const actionName = auto_invite ? '导入 TestFlight 并批准' : (status === 'approved' ? '通过' : '拒绝');
  
  const validRecords = records.value.filter(r => selectedIds.value.includes(r.id) && r.status !== status);
  const skipCount = selectedIds.value.length - validRecords.length;
  
  if (validRecords.length === 0) {
    showToast('warning', '无需操作', '选中的记录状态已经全部一致，无需重复提交。', 3000);
    selectedIds.value = [];
    return;
  }
  
  let confirmMsg = `确定要对选中的 ${validRecords.length} 条记录执行 [${actionName}] 吗？`;
  if (skipCount > 0) {
    confirmMsg += `\n(已为您智能过滤跳过了 ${skipCount} 条无效记录)`;
  }
  
  if (!confirm(confirmMsg)) return;

  bulkUpdating.value = true;
  try {
    const res = await fetch('/api/records', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ ids: validRecords.map(r => r.id), status, auto_invite }),
    });
    const data = await res.json();
    if (data.success) {
      showToast('success', '批量处理完毕', data.message + (data.details ? '<br/><br/>异常明细：<br/>' + data.details.join('<br/>') : ''), 6000);
      selectedIds.value = [];
      fetchRecords(); // 刷新数据
    } else {
      showToast('error', '批量操作出错', data.details ? data.details.join('<br/>') : data.error, 0); // 0 表示不自动关闭
      fetchRecords(); 
    }
  } catch (e) {
    showToast('error', '网络请求失败', '请检查网络设置或查看控制台。');
  } finally {
    bulkUpdating.value = false;
  }
}

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

function formatDate(iso) {
  if (!iso) return '—';
  const d = new Date(iso + (iso.endsWith('Z') ? '' : 'Z'));
  return d.toLocaleString('zh-CN', {
    timeZone: 'Asia/Shanghai',
    year: 'numeric', month: '2-digit', day: '2-digit',
    hour: '2-digit', minute: '2-digit',
  });
}

async function fetchRecords() {
  loading.value = true;
  authError.value = false;
  try {
    const params = new URLSearchParams({
      page: filter.page,
      limit: LIMIT,
      days: filter.days,
      ...(filter.app_id && { app_id: filter.app_id }),
      ...(filter.status  && { status:  filter.status }),
    });
    const res  = await fetch(`/api/records?${params}`);
    if (res.status === 403 || res.status === 401) {
      authError.value = true;
      return;
    }
    const data = await res.json();
    records.value = data.data || [];
    total.value   = data.total || 0;
  } catch (e) {
    console.error('fetchRecords error', e);
  } finally {
    loading.value = false;
  }
}

async function updateStatus(row, status) {
  updating.value = row.id;
  try {
    const res = await fetch('/api/records', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ ids: [row.id], status }),
    });
    const data = await res.json();
    if (data.success) {
      showToast('success', '更新成功', `记录 #${row.id} 已变为 ${STATUS_LABELS[status]}`, 3000);
      const idx = records.value.findIndex(r => r.id === row.id);
      if (idx !== -1) {
        records.value.splice(idx, 1, {
          ...records.value[idx],
          status,
          reviewed_at: status !== 'pending' ? new Date().toISOString() : null,
        });
      }
    } else {
      showToast('error', '状态更新失败', data.error);
    }
  } catch (e) {
    showToast('error', '请求失败', e.message);
  } finally {
    updating.value = null;
  }
}

function setAppFilter(id) {
  filter.app_id = id;
  filter.page = 1;
}
function setStatusFilter(s) {
  filter.status = s;
  filter.page = 1;
}
function goPage(p) {
  filter.page = p;
}

watch(filter, fetchRecords, { deep: true });
onMounted(fetchRecords);
</script>

<style scoped>
.admin-page {
  min-height: 100vh;
  padding-top: var(--nav-height);
  background: var(--bg-primary);
}

.admin-layout {
  display: flex;
  min-height: calc(100vh - var(--nav-height));
}

/* 侧边栏 */
.admin-sidebar {
  width: 240px;
  min-height: calc(100vh - var(--nav-height));
  padding: 2rem 1rem;
  border-radius: 0;
  border-right: 1px solid rgba(255,230,200,0.06);
  position: sticky;
  top: var(--nav-height);
  flex-shrink: 0;
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
}
.sidebar-brand {
  display: flex;
  align-items: center;
  gap: 0.6rem;
  padding: 0 0.5rem;
}
.brand-icon { font-size: 1.4rem; }
.brand-text {
  font-size: 1.1rem;
  font-weight: 700;
  background: var(--accent-gradient);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
}

.sidebar-nav {
  display: flex;
  flex-direction: column;
  gap: 0.3rem;
}
.nav-group-label {
  font-size: 0.72rem;
  font-weight: 600;
  color: var(--text-muted);
  letter-spacing: 0.1em;
  text-transform: uppercase;
  padding: 0 0.75rem;
  margin-bottom: 0.5rem;
  margin-top: 0.5rem;
}
.nav-item {
  display: flex;
  align-items: center;
  gap: 0.6rem;
  padding: 0.65rem 0.75rem;
  border-radius: 10px;
  border: none;
  background: transparent;
  color: var(--text-secondary);
  font-size: 0.9rem;
  font-family: inherit;
  cursor: pointer;
  text-align: left;
  transition: all 0.2s ease;
  position: relative;
}
.nav-item:hover {
  background: rgba(255,255,255,0.05);
  color: var(--text-primary);
}
.nav-item.active {
  background: rgba(249,115,22,0.12);
  color: var(--accent-blue);
  font-weight: 500;
}
.nav-icon { flex-shrink: 0; }
.nav-badge {
  margin-left: auto;
  background: rgba(249,115,22,0.2);
  color: var(--accent-blue);
  border-radius: 100px;
  padding: 0 0.45rem;
  font-size: 0.75rem;
  font-weight: 600;
}

/* 主内容区 */
.admin-main {
  flex: 1;
  padding: 2rem 2.5rem;
  overflow-x: auto;
}

.admin-header {
  display: flex;
  align-items: flex-start;
  justify-content: space-between;
  margin-bottom: 2rem;
  gap: 1rem;
  flex-wrap: wrap;
}
.admin-title {
  font-size: 1.6rem;
  font-weight: 700;
}
.admin-sub {
  margin-top: 0.25rem;
  color: var(--text-muted);
  font-size: 0.88rem;
}

/* 过滤及时间选择 */
.filters-wrap {
  display: flex;
  align-items: center;
  gap: 1rem;
}
.time-select {
  background: rgba(255,255,255,0.04);
  border: 1px solid rgba(255,230,200,0.08);
  border-radius: 12px;
  color: var(--text-primary);
  padding: 0.4rem 1rem;
  font-family: inherit;
  font-size: 0.85rem;
  outline: none;
}
.time-select option {
  background: var(--bg-primary);
}

/* 状态 Tabs */
.status-tabs {
  display: flex;
  gap: 0.4rem;
  background: rgba(255,255,255,0.04);
  border: 1px solid rgba(255,230,200,0.08);
  border-radius: 12px;
  padding: 0.3rem;
}
.status-tab {
  padding: 0.4rem 1rem;
  border-radius: 8px;
  border: none;
  background: transparent;
  color: var(--text-muted);
  font-size: 0.85rem;
  font-family: inherit;
  cursor: pointer;
  transition: all 0.2s ease;
}
.status-tab:hover { color: var(--text-primary); }
.status-tab.active {
  background: rgba(249,115,22,0.18);
  color: var(--accent-blue);
  font-weight: 600;
}

/* Loading / Empty */
.loading-state {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 1rem;
  padding: 5rem;
  color: var(--text-muted);
}
.spinner-lg {
  width: 40px;
  height: 40px;
  border: 3px solid rgba(255,255,255,0.1);
  border-top-color: var(--accent-blue);
  border-radius: 50%;
  animation: spin 0.8s linear infinite;
}
@keyframes spin { to { transform: rotate(360deg); } }

.empty-state {
  padding: 5rem;
  text-align: center;
  color: var(--text-muted);
}
.empty-icon { font-size: 3rem; margin-bottom: 1rem; }

/* 批量操作区 */
.bulk-actions {
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0.8rem 1.5rem;
  margin-bottom: 1rem;
  background: rgba(249,115,22,0.05);
  border-color: rgba(249,115,22,0.2);
}
.bulk-text { font-size: 0.9rem; color: var(--text-primary); }
.bulk-btns { display: flex; gap: 0.8rem; }

/* 表格 */
.table-wrapper {
  border-radius: 16px;
  overflow: hidden;
  overflow-x: auto;
}
.admin-table {
  width: 100%;
  border-collapse: collapse;
  font-size: 0.88rem;
}
.admin-table th {
  background: rgba(255,255,255,0.04);
  color: var(--text-muted);
  font-weight: 600;
  font-size: 0.78rem;
  letter-spacing: 0.05em;
  text-transform: uppercase;
  padding: 0.9rem 1rem;
  text-align: left;
  white-space: nowrap;
  border-bottom: 1px solid rgba(255,230,200,0.06);
}
.admin-table td {
  padding: 0.85rem 1rem;
  border-bottom: 1px solid rgba(255,230,200,0.04);
  vertical-align: middle;
  white-space: nowrap;
}
.table-row:last-child td { border-bottom: none; }
.table-row:hover td { background: rgba(255,255,255,0.02); }
.table-row.row-approved td { border-left: 2px solid rgba(34,197,94,0.4); }
.table-row.row-rejected td { border-left: 2px solid rgba(239,68,68,0.4); }

.checkbox-col {
  width: 40px;
  text-align: center;
}

.cell-id { color: var(--text-muted); font-size: 0.8rem; }
.app-tag {
  display: inline-flex;
  align-items: center;
  gap: 0.4rem;
  background: rgba(255,255,255,0.06);
  border-radius: 8px;
  padding: 0.25rem 0.6rem;
  font-size: 0.82rem;
}
.real-icon-sm { width: 20px; height: 20px; border-radius: 5px; object-fit: cover; }
.real-icon-xs { width: 16px; height: 16px; border-radius: 4px; object-fit: cover; }

.email-link {
  color: var(--accent-blue);
  text-decoration: none;
}
.email-link:hover { text-decoration: underline; }
.mono-text { font-family: 'Space Grotesk', monospace; font-size: 0.82rem; }
.text-muted-cell { color: var(--text-muted); }
.date-text { font-size: 0.82rem; color: var(--text-secondary); }
.screenshot-link {
  color: var(--accent-purple);
  text-decoration: none;
  font-size: 0.85rem;
}
.screenshot-link:hover { text-decoration: underline; }

/* 状态 Badge */
.status-badge {
  display: inline-block;
  padding: 0.2rem 0.65rem;
  border-radius: 100px;
  font-size: 0.78rem;
  font-weight: 600;
}
.badge-pending  { background: rgba(249,115,22,0.15); color: var(--accent-blue); }
.badge-approved { background: rgba(34,197,94,0.15);  color: #4ade80; }
.badge-rejected { background: rgba(239,68,68,0.15);  color: #f87171; }

/* 操作按钮 */
.action-btns {
  display: flex;
  gap: 0.4rem;
  align-items: center;
}
.action-btn {
  padding: 0.3rem 0.7rem;
  border-radius: 8px;
  border: 1px solid;
  font-size: 0.78rem;
  font-family: inherit;
  cursor: pointer;
  transition: all 0.2s ease;
  font-weight: 500;
}
.action-btn:disabled { opacity: 0.4; cursor: not-allowed; }
.action-btn.approve {
  background: rgba(34,197,94,0.1);
  border-color: rgba(34,197,94,0.3);
  color: #4ade80;
}
.action-btn.approve:hover:not(:disabled) {
  background: rgba(34,197,94,0.25);
}
.action-btn.reject {
  background: rgba(239,68,68,0.1);
  border-color: rgba(239,68,68,0.3);
  color: #f87171;
}
.action-btn.reject:hover:not(:disabled) {
  background: rgba(239,68,68,0.25);
}
.action-btn.reset {
  background: rgba(255,255,255,0.06);
  border-color: rgba(255,255,255,0.12);
  color: var(--text-muted);
}
.action-btn.reset:hover:not(:disabled) {
  background: rgba(255,255,255,0.1);
  color: var(--text-secondary);
}
.action-btn.apple {
  background: rgba(56,189,248,0.1);
  border-color: rgba(56,189,248,0.3);
  color: #38bdf8;
}
.action-btn.apple:hover:not(:disabled) {
  background: rgba(56,189,248,0.25);
}

/* 遮罩层 */
.bulk-overlay {
  position: absolute;
  top: 0; left: 0; right: 0; bottom: 0;
  background: rgba(15, 23, 42, 0.7);
  backdrop-filter: blur(8px);
  -webkit-backdrop-filter: blur(8px);
  z-index: 50;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  color: var(--text-primary);
  font-weight: 600;
  font-size: 1.1rem;
  gap: 1.5rem;
  border-radius: 16px;
}

/* Toast 提示框 */
.toast-message {
  position: fixed;
  top: 20px;
  right: 20px;
  z-index: 9999;
  min-width: 320px;
  max-width: 400px;
  padding: 1rem 1.2rem;
  display: flex;
  gap: 1rem;
  align-items: flex-start;
  box-shadow: 0 10px 30px rgba(0,0,0,0.4);
  border-left: 4px solid;
}
.toast-success { border-left-color: #4ade80; }
.toast-error   { border-left-color: #f87171; }
.toast-warning { border-left-color: #fbbf24; }
.toast-icon { font-size: 1.4rem; }
.toast-content { flex: 1; }
.toast-title { font-weight: 600; font-size: 1rem; margin-bottom: 0.3rem; }
.toast-desc { font-size: 0.85rem; color: var(--text-secondary); line-height: 1.5; }
.toast-close {
  background: transparent;
  border: none;
  color: var(--text-muted);
  font-size: 1.2rem;
  cursor: pointer;
  padding: 0;
}
.toast-close:hover { color: var(--text-primary); }

.toast-fade-enter-active, .toast-fade-leave-active { transition: all 0.3s ease; }
.toast-fade-enter-from { opacity: 0; transform: translateX(50px); }
.toast-fade-leave-to { opacity: 0; transform: translateX(50px); }

/* 分页 */
.pagination {
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 1.5rem;
  margin-top: 2rem;
}
.page-btn {
  padding: 0.5rem 1.2rem;
  border-radius: 10px;
  border: 1px solid rgba(255,230,200,0.1);
  background: rgba(255,255,255,0.04);
  color: var(--text-secondary);
  font-size: 0.88rem;
  font-family: inherit;
  cursor: pointer;
  transition: all 0.2s ease;
}
.page-btn:hover:not(:disabled) {
  background: rgba(249,115,22,0.1);
  border-color: rgba(249,115,22,0.3);
  color: var(--accent-blue);
}
.page-btn:disabled { opacity: 0.4; cursor: not-allowed; }
.page-info { color: var(--text-muted); font-size: 0.88rem; }

/* 响应式 */
@media (max-width: 1024px) {
  .admin-sidebar { width: 200px; }
}
@media (max-width: 768px) {
  .admin-layout { flex-direction: column; }
  .admin-sidebar {
    width: 100%;
    min-height: auto;
    position: static;
    padding: 1rem;
  }
  .sidebar-nav { flex-direction: row; flex-wrap: wrap; }
  .nav-group-label { display: none; }
  .admin-main { padding: 1.5rem 1rem; }
  .admin-header { flex-direction: column; }
}
</style>
