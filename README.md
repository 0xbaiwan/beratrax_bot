# beratrax Bot 自动领取 Bera 水龙头和自动质押

![banner](image-1.png)
- 网站：[https://beratrax.com/](https://testnet.beratrax.com/GeognosticalBera)

## 功能特点

- **自动领取 Bera 水龙头**
- **自动注入资金并质押 LP**
- **自动注册钱包**
- **自动生成新钱包**
- **支持代理使用**

## 使用前提

- 电脑上已安装 Node.js
- 所有钱包必须在以太坊主网上有 0.001 ETH 才能领取 Bera 水龙头
- 如果你已经有注册的账户，只需创建 `wallets.json` 并在其中输入钱包详情
- 可以在 `wallet-example.json` 中查看钱包示例
- 或者使用命令 `npm run setup` 创建新钱包
- 验证码 API 密钥可以在这里获取：http://2captcha.com 或 http://anti-captcha.com

## 安装步骤

1. 克隆仓库：
    ```sh
    git clone https://github.com/0xbaiwan/beratrax_bot.git
    cd beratrax_bot
    ```

2. 安装所需依赖：
    ```sh
    npm install
    ```

3. 创建新钱包：
    ```
    npm run setup
    ```

4. 可选：使用代理
- 在 `proxy.txt` 中粘贴代理，格式为 `http://username:password@ip:port`
    ```sh
    nano proxy.txt
    ```

5. 运行脚本：
    ```sh
    npm run start
    ```

所有钱包信息保存在 `wallets.json` 中

## 代理服务（可选）

### 免费静态住宅代理
- [WebShare](https://www.webshare.io/?referral_code=gtw7lwqqelgu)
- [ProxyScrape](https://proxyscrape.com/)
- [MonoSans](https://github.com/monosans/proxy-list)

### 付费高级静态住宅代理
- [922proxy](https://www.922proxy.com/register?inviter_code=d6416857)
- [Proxy-Cheap](https://app.proxy-cheap.com/r/Pd6sqg)
- [Infatica](https://dashboard.infatica.io/aff.php?aff=580)

### 付费动态IP代理
- [IPRoyal](https://iproyal.com/?r=733417)
