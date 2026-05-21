<template>
  <div class="privacy-page">
    <div class="bg-glow"></div>
    
    <div class="privacy-container">
      <router-link :to="`/app/${appid}`" class="back-link reveal active">
        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M19 12H5M12 19l-7-7 7-7"/></svg>
        返回应用详情
      </router-link>

      <div v-if="appPrivacy" class="privacy-content glass-card reveal active">
        <div class="privacy-header">
          <div class="shield-icon">
            <svg fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
            </svg>
          </div>
          <h1 class="display-text gradient-text">{{ appPrivacy.name }} 隐私政策</h1>
          <p class="update-time">更新日期：2026年5月21日</p>
        </div>

        <div class="privacy-body">
          <p class="lead-text">
            “糖葫芦”系列产品（以下简称“我们”）深知个人信息对您的重要性，并致力于保护您的个人隐私。本隐私政策旨在向您说明在您使用 <strong>{{ appPrivacy.name }}</strong> 的过程中，我们如何处理您的数据、申请的系统权限以及我们对您隐私的庄严承诺。<strong>请您在使用本应用前仔细阅读本政策。</strong>
          </p>

          <div v-for="(section, index) in appPrivacy.sections" :key="index" class="privacy-section">
            <h3 class="section-title">
              <span class="section-num">{{ index + 1 }}</span>
              {{ section.title }}
            </h3>
            <div class="section-content">
              <p v-for="(para, pIdx) in section.paragraphs" :key="pIdx" class="paragraph">{{ para }}</p>
              <ul v-if="section.list && section.list.length > 0" class="section-list">
                <li v-for="(item, iIdx) in section.list" :key="iIdx">
                  <strong>{{ item.label }}</strong>：{{ item.detail }}
                </li>
              </ul>
            </div>
          </div>

          <div class="privacy-footer-contact">
            <h3>联系我们</h3>
            <p>如果您对本隐私政策或个人信息保护有任何疑问、意见或建议，请通过以下官方邮箱与我们联系：</p>
            <p class="contact-email">
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"/><polyline points="22,6 12,13 2,6"/></svg>
              <a href="mailto:hsb@myit2017.cn">hsb@myit2017.cn</a>
            </p>
          </div>
        </div>
      </div>

      <div v-else class="error-panel glass-card reveal active">
        <h3>未找到对应的应用</h3>
        <p>请求的隐私政策应用标识 ({{ appid }}) 不存在或已下线。</p>
        <router-link to="/" class="btn-primary mt-4">返回主页</router-link>
      </div>
    </div>
  </div>
</template>

<script setup>
import { computed, onMounted } from 'vue'

const props = defineProps({
  appid: {
    type: String,
    required: true
  }
})

// 各个产品的隐私条款数据
const PRIVACY_DATA = {
  'thl-browser': {
    name: '糖葫芦浏览器',
    sections: [
      {
        title: '个人信息收集与存储',
        paragraphs: [
          '作为一款极速、私密的电视大屏网络浏览器，糖葫芦浏览器绝对不会收集、上传或与第三方共享您的网页浏览历史记录、输入过的网址、搜索关键词、收藏夹（书签）等任何网络足迹信息。',
          '为保护您的个人隐私，您的所有个人浏览数据均仅以加密形式保存在您当前设备本地的私有存储空间中。这些数据完全归您所有，我们无法访问，也不会将其备份至任何云端服务器。'
        ]
      },
      {
        title: '系统权限的申请与使用',
        paragraphs: [
          '为了能够实现网页访问及基本的文件下载功能，我们可能会在您使用过程中申请以下关键权限：'
        ],
        list: [
          { label: '网络访问权限', detail: '用于连接互联网、加载网页内容以及解码播放网页视频流。' },
          { label: '读写外部存储权限', detail: '仅当您主动触发网页内的文件下载功能时，用于将文件保存至本地设备存储中。' }
        ]
      },
      {
        title: '第三方网页与组件说明',
        paragraphs: [
          '当您通过糖葫芦浏览器访问第三方网站或使用其内部的脚本组件时，这些网站或组件可能会收集您的 IP 地址、Cookie 或其他数据。此类收集行为由第三方直接实施并受其自身的隐私政策约束，我们建议您在访问相关网页时审慎阅读其条款。'
        ]
      },
      {
        title: '数据清除保障',
        paragraphs: [
          '您随时可以在应用设置中一键清除所有的历史记录、缓存文件和 Cookie。同时，当您卸载本应用时，存储于设备本地私有目录中的一切浏览轨迹和数据将被操作系统完全清除，绝无残留。'
        ]
      }
    ]
  },
  'thl-screen': {
    name: '糖葫芦投屏',
    sections: [
      {
        title: '投屏数据与媒体流隐私',
        paragraphs: [
          '糖葫芦投屏是纯粹的无线投屏桥接工具。我们绝对不会收集、捕获或记录您在使用过程中所传输的视频流、音频流、图片、媒体播放轨迹或任何其他投屏内容。',
          '我们亦不会对您的终端设备进行任何跨网络追踪，绝不收集设备识别码。'
        ]
      },
      {
        title: '局域网直连传输机制',
        paragraphs: [
          '本应用采用基于局域网（LAN）的 DLNA 协议或原生 HTTP 服务进行推流与投屏通信。所有的影音数据与控制指令仅在您的本地 Wi-Fi 路由器/本地局域网内直接分发与流转，完全属于点对点传输。数据不经过、且绝不上传到任何外部的云端中转服务器，从源头杜绝了数据泄露的风险。'
        ]
      },
      {
        title: '权限获取及用途',
        paragraphs: [
          '为确保能够正常检索和联通同网段设备，应用需要获取以下权限：'
        ],
        list: [
          { label: '本地网络/局域网访问权限', detail: '用于扫描、发现和建立与同一 Wi-Fi 网络下发送端设备（如手机）的无线连接通道。' },
          { label: '网络状态读取权限', detail: '用于检测当前 Wi-Fi 的连接状态，保障投屏链路的稳定运行。' }
        ]
      }
    ]
  },
  'thl-play': {
    name: '糖葫芦享屏',
    sections: [
      {
        title: '投音与镜像隐私保护',
        paragraphs: [
          '糖葫芦享屏是一款针对 Apple 生态设计的 AirPlay 与音频接收解决方案。本应用仅在本地执行音频解码和视频流渲染，绝不记录、抓取、存储或上传您的投屏画面、音轨内容以及任何相关的控制记录。'
        ]
      },
      {
        title: '零中转局域网通信',
        paragraphs: [
          '基于 AVSampleBufferDisplayLayer 硬件加速和 NWListenerBridge 技术，享屏直接在您的本地 iOS/macOS 物理设备与接收端设备之间建立点对点通信。投音与投屏的所有数据都在极安全的本地局域网内闭环传输，我们不设置任何云端中转服务器，更无法截取您的任何隐私多媒体数据。'
        ]
      },
      {
        title: '权限使用声明',
        paragraphs: [
          '为保证无线连接协议畅通，我们会向您申请以下必要权限：'
        ],
        list: [
          { label: '本地网络/局域网权限', detail: '用于广播和侦听 AirPlay 协议请求，允许手机或 iPad 快速发现该接收端。' },
          { label: '系统通知权限', detail: '用于在建立连接、断开连接或接收缓冲时，向您发送状态提示通知。' }
        ]
      }
    ]
  },
  'thl-tv': {
    name: '糖葫芦TV',
    sections: [
      {
        title: '播单与历史无云化',
        paragraphs: [
          '作为一款高画质 IPTV 播放软件，糖葫芦TV不会收集您的频道源订阅地址、播放历史、收藏列表、搜索关键字以及任何播放偏好数据。',
          '我们坚信您的娱乐隐私应完全属于您自己。因此，我们不提供任何云端同步或云端播单共享功能。'
        ]
      },
      {
        title: '本地化加密存储',
        paragraphs: [
          '您手动导入或通过扫码添加的第三方 M3U 直播播单地址、EPG 电子节目指南配置信息等，均仅以明文或加密形式存储在您电视或机顶盒设备的本地安全沙盒（本地数据库）中。我们无法访问此类信息，这些信息也会随着应用的卸载而被彻底擦除。'
        ]
      },
      {
        title: '网络访问与请求权限',
        paragraphs: [
          '本应用需要且仅需要以下权限：'
        ],
        list: [
          { label: '互联网/网络访问权限', detail: '用于向您自行配置的第三方流媒体服务器发送请求，加载并播放对应的 IPTV 视频流。' }
        ]
      }
    ]
  },
  'thl-pdf': {
    name: '糖葫芦PDF',
    sections: [
      {
        title: '文稿内容的绝对隐私',
        paragraphs: [
          '糖葫芦PDF用于在电视大屏和各类设备上阅读、展示 PDF 电子文档。我们绝对不会读取、分析、缓存或上传您的任何 PDF 内部文本、图表、合同协议以及其他敏感文档内容。所有的 PDF 渲染与解析引擎完全在您当前设备的 CPU 和 GPU 本地离线执行，安全可靠。'
        ]
      },
      {
        title: '局域网读取与无线直推隐私',
        paragraphs: [
          '当您使用 SMB 局域网协议读取企业或家庭网络文稿时，应用仅与您的局域网服务器直连，数据完全隔离。',
          '在您使用手机扫码“隔空直投”PDF 文件时，本应用仅在两端设备的本地局域网内临时建立局域网 HTTP 握手直连，文件流由手机直接写入接收端设备内存，不经过任何互联网服务器。'
        ]
      },
      {
        title: '权限说明',
        paragraphs: [
          '为实现文档跨设备读取与展示，我们需要以下权限：'
        ],
        list: [
          { label: '外部存储/媒体库读写权限', detail: '用于在您的允许下读取本地的 PDF 文稿，或将接收的 PDF 文件保存到设备中。' },
          { label: '局域网访问权限', detail: '用于建立本地 SMB 共享服务器连接，以及启用局域网临时无线投递服务。' }
        ]
      }
    ]
  },
  'thl-watch': {
    name: '糖葫芦修仙',
    sections: [
      {
        title: 'HealthKit 健康数据的授权与限制',
        paragraphs: [
          '糖葫芦修仙是一款将行走步数与玄幻修仙融合的 Apple Watch 运动激励应用。在首次启动或相关游戏功能被激活时，应用会请求访问 Apple HealthKit（健康数据）中的“运动步数”和“活跃能量（卡路里）”。',
          '我们仅在您主动授权的前提下读取这些健康指标。您可以随时在 Apple Watch 或 iPhone 系统的“设置-健康-数据访问与设备”中撤销此项授权。'
        ]
      },
      {
        title: '健康数据的用途与本地运算',
        paragraphs: [
          '我们读取的步数与卡路里仅用于在游戏逻辑中折算为您角色的“功力”、“真气”，以及决定炼丹、突破时火候等本地趣味玩法。所有的折算算法和数值累加完全在 Watch 端本地离线完成。'
        ]
      },
      {
        title: '零上传与零共享承诺',
        paragraphs: [
          '我们对您的健康隐私提供最严格的承诺：我们绝对不会将获取的任何 HealthKit 健康步数及活跃能量数据上传到我们或任何第三方的云端服务器，也绝对不会将这些数据提供或分享给任何广告商、市场调研机构或合作伙伴。您的身体健康数据将始终完整保留在 Apple 系统底层沙盒中。'
        ]
      },
      {
        title: '系统通知权限',
        paragraphs: [
          '我们会申请获取系统通知权限，仅用于在您的步数达标、真气盈满、丹药出炉或境界面临突破时，向您的手腕发送震动和本地通知提醒。'
        ]
      }
    ]
  },
  'thl-send': {
    name: '糖葫芦投送',
    sections: [
      {
        title: '零云端文件隐私承诺',
        paragraphs: [
          '糖葫芦投送是专为 HarmonyOS NEXT 深度开发的局域网点对点传输利器。我们绝对不会收集、保留、查看或中转您发送与接收的任何文件（包括照片、视频、应用包、压缩档）或剪贴板文本内容。',
          '我们坚守不干涉原则，数据传输路径上不设置任何云服务器。'
        ]
      },
      {
        title: 'P2P 局域网自组网机制',
        paragraphs: [
          '基于 LocalSend 开源通信标准，糖葫芦投送通过局域网内的 P2P 点对点握手直接进行数据分发。所有文件的传输速度受限于您的本地 Wi-Fi 物理带宽上限，过程完全保密，杜绝因外部网络截听带来的任何信息泄漏风险。'
        ]
      },
      {
        title: '系统权限申请规范',
        paragraphs: [
          '为保证局域网无感快速传输的运行，我们会申请以下必要权限：'
        ],
        list: [
          { label: '本地网络/局域网访问权限', detail: '用于在同一 Wi-Fi 网络中扫描同段设备，并发现可互传的 LocalSend 终端。' },
          { label: '文件与媒体读取权限', detail: '用于从鸿蒙系统原生文件管理器或图库中选择您需要发送的文件。' },
          { label: '文件写入权限', detail: '用于将接收到的对端文件、照片、视频无损写入您设备指定的下载目录中。' }
        ]
      }
    ]
  }
}

const appPrivacy = computed(() => {
  return PRIVACY_DATA[props.appid] || null
})

onMounted(() => {
  window.scrollTo(0, 0)
})
</script>

<style scoped>
.privacy-page {
  width: 100%;
  padding-top: var(--nav-height);
  position: relative;
  min-height: 100vh;
}

.bg-glow {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: radial-gradient(circle at 50% 30%, rgba(249, 115, 22, 0.04) 0%, transparent 60%);
  pointer-events: none;
  z-index: 1;
}

.privacy-container {
  width: 100%;
  max-width: 900px;
  margin: 0 auto;
  padding: 4rem 5%;
  position: relative;
  z-index: 2;
}

.back-link {
  display: inline-flex;
  align-items: center;
  gap: 0.8rem;
  color: var(--text-secondary);
  text-decoration: none;
  font-weight: 500;
  margin-bottom: 3rem;
  transition: var(--transition-base);
}

.back-link:hover {
  color: white;
  transform: translateX(-5px);
}

.privacy-content {
  padding: 5rem;
}

.privacy-header {
  text-align: center;
  margin-bottom: 4rem;
  border-bottom: 1px solid rgba(255, 230, 200, 0.05);
  padding-bottom: 3rem;
}

.shield-icon {
  width: 72px;
  height: 72px;
  border-radius: 20px;
  background: var(--accent-gradient);
  color: white;
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 0 auto 2rem;
  box-shadow: 0 10px 25px rgba(249, 115, 22, 0.15);
}

.shield-icon svg {
  width: 36px;
  height: 36px;
}

.privacy-header h1 {
  font-size: clamp(2rem, 4vw, 2.8rem);
  font-weight: 800;
  margin-bottom: 1rem;
}

.update-time {
  font-size: 0.95rem;
  color: var(--text-muted);
}

.privacy-body {
  font-size: 1.05rem;
  line-height: 1.8;
  color: var(--text-secondary);
}

.lead-text {
  font-size: 1.15rem;
  line-height: 1.8;
  color: white;
  margin-bottom: 3.5rem;
  padding-left: 1.5rem;
  border-left: 3px solid var(--accent-blue);
}

.privacy-section {
  margin-bottom: 3.5rem;
}

.section-title {
  font-size: 1.4rem;
  font-weight: 700;
  color: white;
  margin-bottom: 1.5rem;
  display: flex;
  align-items: center;
  gap: 1rem;
}

.section-num {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  width: 28px;
  height: 28px;
  border-radius: 8px;
  background: rgba(249, 115, 22, 0.1);
  color: var(--accent-blue);
  font-size: 0.95rem;
  font-weight: 800;
  border: 1px solid rgba(249, 115, 22, 0.2);
}

.paragraph {
  margin-bottom: 1rem;
}

.section-list {
  list-style: none;
  padding-left: 1rem;
  margin-top: 1.2rem;
}

.section-list li {
  position: relative;
  padding-left: 1.5rem;
  margin-bottom: 1rem;
}

.section-list li::before {
  content: '';
  position: absolute;
  left: 0;
  top: 10px;
  width: 6px;
  height: 6px;
  border-radius: 50%;
  background: var(--accent-blue);
}

.privacy-footer-contact {
  margin-top: 5rem;
  padding-top: 3rem;
  border-top: 1px solid rgba(255, 230, 200, 0.05);
}

.privacy-footer-contact h3 {
  font-size: 1.3rem;
  color: white;
  margin-bottom: 1rem;
}

.contact-email {
  display: inline-flex;
  align-items: center;
  gap: 0.6rem;
  margin-top: 1.2rem;
  padding: 0.8rem 1.5rem;
  background: rgba(255, 255, 255, 0.02);
  border: 1px solid rgba(255, 255, 255, 0.05);
  border-radius: 12px;
  font-weight: 500;
}

.contact-email a {
  color: var(--accent-blue);
  text-decoration: none;
  transition: var(--transition-base);
}

.contact-email a:hover {
  color: white;
  text-decoration: underline;
}

.error-panel {
  text-align: center;
  padding: 5rem;
}

.error-panel h3 {
  font-size: 1.8rem;
  color: white;
  margin-bottom: 1rem;
}

.error-panel p {
  color: var(--text-secondary);
  margin-bottom: 2rem;
}

@media (max-width: 768px) {
  .privacy-container {
    padding: 2rem 1.5rem;
  }
  
  .back-link {
    margin-bottom: 2rem;
  }
  
  .privacy-content {
    padding: 2.5rem 1.5rem;
  }
  
  .privacy-header {
    margin-bottom: 2.5rem;
    padding-bottom: 2rem;
  }
  
  .lead-text {
    font-size: 1.05rem;
    margin-bottom: 2.5rem;
    padding-left: 1rem;
  }
  
  .privacy-section {
    margin-bottom: 2.5rem;
  }
  
  .section-title {
    font-size: 1.2rem;
  }
}
</style>
