import { Solver } from "@2captcha/captcha-solver";
import anticaptcha from "@antiadmin/anticaptchaofficial";
import log from "./logger.js";

const pageurl = "https://bartio.faucet.berachain.com/";
const sitekey = "0x4AAAAAAARdAuciFArKhVwt";

/**
 * 使用2Captcha API解决验证码
 * @param {string} key - 2Captcha API密钥
 * @returns {Promise<string>} - 已解决的验证码令牌
 */
export async function solve2Captcha(key) {
    const solver = new Solver(key);

    try {
        const result = await solver.cloudflareTurnstile({ pageurl, sitekey });
        log.info(`验证码已解决....`);
        return result.data; // 返回已解决的令牌
    } catch (err) {
        log.error(`2Captcha错误: ${err.message}`);
        return null;
    }
}

/**
 * 使用Anti-Captcha API解决验证码
 * @param {string} key - Anti-Captcha API密钥
 * @returns {Promise<string>} - 已解决的验证码令牌
 */
export async function solveAntiCaptcha(key) {
    anticaptcha.setAPIKey(key);

    try {
        const token = await anticaptcha.solveTurnstileProxyless(pageurl, sitekey);
        log.info("Anti-Captcha验证码已解决！");
        return token; // 返回已解决的令牌
    } catch (err) {
        log.error(`Anti-Captcha错误: ${err.message}`);
        return null;
    }
}
