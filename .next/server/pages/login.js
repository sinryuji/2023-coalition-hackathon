"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
(() => {
var exports = {};
exports.id = "pages/login";
exports.ids = ["pages/login"];
exports.modules = {

/***/ "./components/atom.ts":
/*!****************************!*\
  !*** ./components/atom.ts ***!
  \****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"nicknameState\": () => (/* binding */ nicknameState)\n/* harmony export */ });\n/* harmony import */ var recoil__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! recoil */ \"recoil\");\n/* harmony import */ var recoil__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(recoil__WEBPACK_IMPORTED_MODULE_0__);\n\nconst nicknameState = (0,recoil__WEBPACK_IMPORTED_MODULE_0__.atom)({\n    key: \"nickname\",\n    default: \"\"\n});\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9jb21wb25lbnRzL2F0b20udHMuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7O0FBQThCO0FBRXZCLE1BQU1DLGdCQUFnQkQsNENBQUlBLENBQUM7SUFDOUJFLEtBQUk7SUFDSkMsU0FBUztBQUNiLEdBQUUiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9kZWxpdmVyeS8uL2NvbXBvbmVudHMvYXRvbS50cz9kMWZjIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IGF0b20gfSBmcm9tIFwicmVjb2lsXCI7XG5cbmV4cG9ydCBjb25zdCBuaWNrbmFtZVN0YXRlID0gYXRvbSh7XG4gICAga2V5Olwibmlja25hbWVcIixcbiAgICBkZWZhdWx0OiBcIlwiXG59KSJdLCJuYW1lcyI6WyJhdG9tIiwibmlja25hbWVTdGF0ZSIsImtleSIsImRlZmF1bHQiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./components/atom.ts\n");

/***/ }),

/***/ "./pages/login.tsx":
/*!*************************!*\
  !*** ./pages/login.tsx ***!
  \*************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {\n__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"react/jsx-dev-runtime\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/router */ \"next/router\");\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _utils_utils__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../utils/utils */ \"./utils/utils.ts\");\nvar __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_utils_utils__WEBPACK_IMPORTED_MODULE_3__]);\n_utils_utils__WEBPACK_IMPORTED_MODULE_3__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];\n\n\n\n\nconst Login = ()=>{\n    const router = (0,next_router__WEBPACK_IMPORTED_MODULE_2__.useRouter)();\n    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{\n        const isLoggedIn = async ()=>{\n            const loggedIn = await (0,_utils_utils__WEBPACK_IMPORTED_MODULE_3__.checkIfLoggedIn)(router);\n            if (loggedIn) {\n                (0,_utils_utils__WEBPACK_IMPORTED_MODULE_3__.goMainPage)(router);\n            }\n        };\n        isLoggedIn();\n    }, []);\n    const handleLogin = async ()=>{\n        const url = `https://api.intra.42.fr/oauth/authorize?client_id=${\"u-s4t2ud-19980a5b8fe8b9e7250f2b1239c325f3f6579c38cc696313f5c761013195ef93\"}&redirect_uri=${\"http://localhost:3000\"}&response_type=code`;\n        window.location.assign(url);\n    };\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h1\", {\n                children: \"배공파\"\n            }, void 0, false, {\n                fileName: \"/Users/sunwoosong/Desktop/hack/pages/login.tsx\",\n                lineNumber: 24,\n                columnNumber: 7\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"img\", {\n                src: \"https://t1.daumcdn.net/cfile/tistory/99C9493C5F32979520\",\n                width: \"300\"\n            }, void 0, false, {\n                fileName: \"/Users/sunwoosong/Desktop/hack/pages/login.tsx\",\n                lineNumber: 25,\n                columnNumber: 7\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"br\", {}, void 0, false, {\n                fileName: \"/Users/sunwoosong/Desktop/hack/pages/login.tsx\",\n                lineNumber: 26,\n                columnNumber: 7\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                onClick: handleLogin,\n                children: \"Login button\"\n            }, void 0, false, {\n                fileName: \"/Users/sunwoosong/Desktop/hack/pages/login.tsx\",\n                lineNumber: 27,\n                columnNumber: 7\n            }, undefined)\n        ]\n    }, void 0, true, {\n        fileName: \"/Users/sunwoosong/Desktop/hack/pages/login.tsx\",\n        lineNumber: 23,\n        columnNumber: 5\n    }, undefined);\n};\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Login);\n\n__webpack_async_result__();\n} catch(e) { __webpack_async_result__(e); } });//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9wYWdlcy9sb2dpbi50c3guanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7O0FBQWtDO0FBQ007QUFDcUI7QUFFN0QsTUFBTUksUUFBUSxJQUFNO0lBQ2xCLE1BQU1DLFNBQVNKLHNEQUFTQTtJQUN4QkQsZ0RBQVNBLENBQUMsSUFBTTtRQUNkLE1BQU1NLGFBQWEsVUFBWTtZQUM3QixNQUFNQyxXQUFXLE1BQU1MLDZEQUFlQSxDQUFDRztZQUN2QyxJQUFJRSxVQUFVO2dCQUNaSix3REFBVUEsQ0FBQ0U7WUFDYixDQUFDO1FBQ0g7UUFDQUM7SUFDRixHQUFHLEVBQUU7SUFFTCxNQUFNRSxjQUFjLFVBQVk7UUFDOUIsTUFBTUMsTUFBTSxDQUFDLGtEQUFrRCxFQUFFQywyRUFBK0IsQ0FBQyxjQUFjLEVBQUVBLHVCQUFvQyxDQUFDLG1CQUFtQixDQUFDO1FBQzFLSSxPQUFPQyxRQUFRLENBQUNDLE1BQU0sQ0FBQ1A7SUFDekI7SUFFQSxxQkFDRSw4REFBQ1E7OzBCQUNDLDhEQUFDQzswQkFBRzs7Ozs7OzBCQUNKLDhEQUFDQztnQkFBSUMsS0FBSTtnQkFBMERDLE9BQU07Ozs7OzswQkFDekUsOERBQUNDOzs7OzswQkFDRCw4REFBQ0M7Z0JBQU9DLFNBQVNoQjswQkFBYTs7Ozs7Ozs7Ozs7O0FBR3BDO0FBRUEsaUVBQWVKLEtBQUtBLEVBQUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9kZWxpdmVyeS8uL3BhZ2VzL2xvZ2luLnRzeD83MjQzIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IHVzZUVmZmVjdCB9IGZyb20gXCJyZWFjdFwiO1xuaW1wb3J0IHsgdXNlUm91dGVyIH0gZnJvbSBcIm5leHQvcm91dGVyXCI7XG5pbXBvcnQgeyBjaGVja0lmTG9nZ2VkSW4sIGdvTWFpblBhZ2UgfSBmcm9tICcuLi91dGlscy91dGlscyc7XG5cbmNvbnN0IExvZ2luID0gKCkgPT4ge1xuICBjb25zdCByb3V0ZXIgPSB1c2VSb3V0ZXIoKTtcbiAgdXNlRWZmZWN0KCgpID0+IHtcbiAgICBjb25zdCBpc0xvZ2dlZEluID0gYXN5bmMgKCkgPT4ge1xuICAgICAgY29uc3QgbG9nZ2VkSW4gPSBhd2FpdCBjaGVja0lmTG9nZ2VkSW4ocm91dGVyKTtcbiAgICAgIGlmIChsb2dnZWRJbikge1xuICAgICAgICBnb01haW5QYWdlKHJvdXRlcik7XG4gICAgICB9XG4gICAgfTtcbiAgICBpc0xvZ2dlZEluKCk7XG4gIH0sIFtdKTtcblxuICBjb25zdCBoYW5kbGVMb2dpbiA9IGFzeW5jICgpID0+IHtcbiAgICBjb25zdCB1cmwgPSBgaHR0cHM6Ly9hcGkuaW50cmEuNDIuZnIvb2F1dGgvYXV0aG9yaXplP2NsaWVudF9pZD0ke3Byb2Nlc3MuZW52Lk5FWFRfUFVCTElDX0FQSV9VSUR9JnJlZGlyZWN0X3VyaT0ke3Byb2Nlc3MuZW52Lk5FWFRfUFVCTElDX1JFRElSRUNUX1VSSX0mcmVzcG9uc2VfdHlwZT1jb2RlYDtcbiAgICB3aW5kb3cubG9jYXRpb24uYXNzaWduKHVybCk7XG4gIH07XG5cbiAgcmV0dXJuIChcbiAgICA8ZGl2PlxuICAgICAgPGgxPuuwsOqzte2MjDwvaDE+XG4gICAgICA8aW1nIHNyYz1cImh0dHBzOi8vdDEuZGF1bWNkbi5uZXQvY2ZpbGUvdGlzdG9yeS85OUM5NDkzQzVGMzI5Nzk1MjBcIiB3aWR0aD0nMzAwJz48L2ltZz5cbiAgICAgIDxicj48L2JyPlxuICAgICAgPGJ1dHRvbiBvbkNsaWNrPXtoYW5kbGVMb2dpbn0+TG9naW4gYnV0dG9uPC9idXR0b24+XG4gICAgPC9kaXY+XG4gICk7XG59O1xuXG5leHBvcnQgZGVmYXVsdCBMb2dpbjtcbiJdLCJuYW1lcyI6WyJ1c2VFZmZlY3QiLCJ1c2VSb3V0ZXIiLCJjaGVja0lmTG9nZ2VkSW4iLCJnb01haW5QYWdlIiwiTG9naW4iLCJyb3V0ZXIiLCJpc0xvZ2dlZEluIiwibG9nZ2VkSW4iLCJoYW5kbGVMb2dpbiIsInVybCIsInByb2Nlc3MiLCJlbnYiLCJORVhUX1BVQkxJQ19BUElfVUlEIiwiTkVYVF9QVUJMSUNfUkVESVJFQ1RfVVJJIiwid2luZG93IiwibG9jYXRpb24iLCJhc3NpZ24iLCJkaXYiLCJoMSIsImltZyIsInNyYyIsIndpZHRoIiwiYnIiLCJidXR0b24iLCJvbkNsaWNrIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./pages/login.tsx\n");

/***/ }),

/***/ "./utils/utils.ts":
/*!************************!*\
  !*** ./utils/utils.ts ***!
  \************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {\n__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"checkIfLoggedIn\": () => (/* binding */ checkIfLoggedIn),\n/* harmony export */   \"getNickname\": () => (/* binding */ getNickname),\n/* harmony export */   \"getNicknameFromToken\": () => (/* binding */ getNicknameFromToken),\n/* harmony export */   \"goMainPage\": () => (/* binding */ goMainPage),\n/* harmony export */   \"logOut\": () => (/* binding */ logOut)\n/* harmony export */ });\n/* harmony import */ var js_cookie__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! js-cookie */ \"js-cookie\");\n/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! axios */ \"axios\");\n/* harmony import */ var recoil__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! recoil */ \"recoil\");\n/* harmony import */ var recoil__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(recoil__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var components_atom__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! components/atom */ \"./components/atom.ts\");\nvar __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([js_cookie__WEBPACK_IMPORTED_MODULE_0__, axios__WEBPACK_IMPORTED_MODULE_1__]);\n([js_cookie__WEBPACK_IMPORTED_MODULE_0__, axios__WEBPACK_IMPORTED_MODULE_1__] = __webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__);\n\n\n\n\n\nconst MAIN_PAGE = \"/\";\n// async function getToken(code: string) {\n//   const { data } = await axios.post('https://api.intra.42.fr/oauth/token', {\n//     grant_type: 'authorization_code',\n//     client_id: process.env.NEXT_PUBLIC_API_UID,\n//     client_secret: process.env.NEXT_PUBLIC_API_SECRET,\n//     code: code,\n//     redirect_uri: process.env.NEXT_PUBLIC_REDIRECT_URI,\n//   });\n//   return data;\n// }\nasync function checkIfLoggedIn(router) {\n    const token = js_cookie__WEBPACK_IMPORTED_MODULE_0__[\"default\"].get(\"accessToken\");\n    if (token) {\n        try {\n            const response = await axios__WEBPACK_IMPORTED_MODULE_1__[\"default\"].get(\"https://api.intra.42.fr/v2/me\", {\n                headers: {\n                    Authorization: `Bearer ${token}`\n                }\n            });\n            if (response.status >= 400) {\n                throw new Error(\"Not Authorized\");\n            }\n            return true;\n        } catch (error) {\n            return false;\n        }\n    } else {\n        return false;\n    }\n}\nfunction logOut(router) {\n    js_cookie__WEBPACK_IMPORTED_MODULE_0__[\"default\"].set(\"accessToken\", \"\", {\n        expires: 0\n    });\n    router.push(\"/login\");\n}\nfunction goMainPage(router) {\n    router.push(MAIN_PAGE);\n}\nconst getNicknameFromToken = async ()=>{\n    const accessToken = js_cookie__WEBPACK_IMPORTED_MODULE_0__[\"default\"].get(\"accessToken\");\n    try {\n        const response = await axios__WEBPACK_IMPORTED_MODULE_1__[\"default\"].get(\"https://api.intra.42.fr/v2/me\", {\n            headers: {\n                Authorization: `Bearer ${accessToken}`\n            }\n        });\n        return response.data.login;\n    } catch (error) {\n        console.error(error);\n        return null;\n    }\n};\nfunction getNickname() {\n    const [nickname, setNickname] = (0,recoil__WEBPACK_IMPORTED_MODULE_2__.useRecoilState)(components_atom__WEBPACK_IMPORTED_MODULE_4__.nicknameState);\n    (0,react__WEBPACK_IMPORTED_MODULE_3__.useEffect)(()=>{\n        getNicknameFromToken().then((nickname)=>{\n            setNickname(nickname);\n        });\n    }, []);\n    return nickname;\n}\n\n__webpack_async_result__();\n} catch(e) { __webpack_async_result__(e); } });//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi91dGlscy91dGlscy50cy5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFDZ0M7QUFDVTtBQUNGO0FBQ047QUFDYztBQUVoRCxNQUFNSyxZQUFZO0FBRWxCLDBDQUEwQztBQUMxQywrRUFBK0U7QUFDL0Usd0NBQXdDO0FBQ3hDLGtEQUFrRDtBQUNsRCx5REFBeUQ7QUFDekQsa0JBQWtCO0FBQ2xCLDBEQUEwRDtBQUMxRCxRQUFRO0FBQ1IsaUJBQWlCO0FBQ2pCLElBQUk7QUFFRyxlQUFlQyxnQkFBZ0JDLE1BQWtCLEVBQW9CO0lBQzFFLE1BQU1DLFFBQVFSLHFEQUFXLENBQUM7SUFFMUIsSUFBSVEsT0FBTztRQUNULElBQUk7WUFDRixNQUFNRSxXQUFXLE1BQU1ULGlEQUFTLENBQzlCLGlDQUNBO2dCQUNFVSxTQUFTO29CQUNQQyxlQUFlLENBQUMsT0FBTyxFQUFFSixNQUFNLENBQUM7Z0JBQ2xDO1lBQ0Y7WUFFRixJQUFJRSxTQUFTRyxNQUFNLElBQUksS0FBSztnQkFDMUIsTUFBTSxJQUFJQyxNQUFNLGtCQUFrQjtZQUNwQyxDQUFDO1lBQ0QsT0FBTyxJQUFJO1FBQ2IsRUFBRSxPQUFPQyxPQUFPO1lBQ2QsT0FBTyxLQUFLO1FBQ2Q7SUFDRixPQUFPO1FBQ0wsT0FBTyxLQUFLO0lBQ2QsQ0FBQztBQUNILENBQUM7QUFFTSxTQUFTQyxPQUFPVCxNQUFrQixFQUFFO0lBQ3pDUCxxREFBVyxDQUFDLGVBQWUsSUFBSTtRQUFFa0IsU0FBUztJQUFDO0lBQzNDWCxPQUFPWSxJQUFJLENBQUM7QUFDZCxDQUFDO0FBRU0sU0FBU0MsV0FBV2IsTUFBa0IsRUFBRTtJQUM3Q0EsT0FBT1ksSUFBSSxDQUFDZDtBQUNkLENBQUM7QUFFTSxNQUFNZ0IsdUJBQXVCLFVBQVk7SUFDOUMsTUFBTUMsY0FBY3RCLHFEQUFXLENBQUM7SUFDaEMsSUFBSTtRQUNGLE1BQU1VLFdBQVcsTUFBTVQsaURBQVMsQ0FBQyxpQ0FBaUM7WUFDaEVVLFNBQVM7Z0JBQ1BDLGVBQWUsQ0FBQyxPQUFPLEVBQUVVLFlBQVksQ0FBQztZQUN4QztRQUNGO1FBQ0EsT0FBT1osU0FBU2EsSUFBSSxDQUFDQyxLQUFLO0lBQzVCLEVBQUUsT0FBT1QsT0FBTztRQUNkVSxRQUFRVixLQUFLLENBQUNBO1FBQ2QsT0FBTyxJQUFJO0lBQ2I7QUFDRixFQUFFO0FBRUssU0FBU1csY0FBYztJQUM1QixNQUFNLENBQUNDLFVBQVVDLFlBQVksR0FBRzFCLHNEQUFjQSxDQUFDRSwwREFBYUE7SUFDNURELGdEQUFTQSxDQUFDLElBQUk7UUFDWmtCLHVCQUF1QlEsSUFBSSxDQUFDLENBQUNGLFdBQWE7WUFDeENDLFlBQVlEO1FBQ2I7SUFDSCxHQUFFLEVBQUU7SUFFSixPQUFPQTtBQUNULENBQUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9kZWxpdmVyeS8uL3V0aWxzL3V0aWxzLnRzPzA5OTUiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgdXNlUm91dGVyLCBOZXh0Um91dGVyIH0gZnJvbSAnbmV4dC9yb3V0ZXInO1xuaW1wb3J0IENvb2tpZXMgZnJvbSAnanMtY29va2llJztcbmltcG9ydCBheGlvcywgeyBmb3JtVG9KU09OIH0gZnJvbSAnYXhpb3MnO1xuaW1wb3J0IHsgdXNlUmVjb2lsU3RhdGUgfSBmcm9tICdyZWNvaWwnO1xuaW1wb3J0IHsgdXNlRWZmZWN0IH0gZnJvbSAncmVhY3QnO1xuaW1wb3J0IHsgbmlja25hbWVTdGF0ZSB9IGZyb20gJ2NvbXBvbmVudHMvYXRvbSc7XG5cbmNvbnN0IE1BSU5fUEFHRSA9IFwiL1wiO1xuXG4vLyBhc3luYyBmdW5jdGlvbiBnZXRUb2tlbihjb2RlOiBzdHJpbmcpIHtcbi8vICAgY29uc3QgeyBkYXRhIH0gPSBhd2FpdCBheGlvcy5wb3N0KCdodHRwczovL2FwaS5pbnRyYS40Mi5mci9vYXV0aC90b2tlbicsIHtcbi8vICAgICBncmFudF90eXBlOiAnYXV0aG9yaXphdGlvbl9jb2RlJyxcbi8vICAgICBjbGllbnRfaWQ6IHByb2Nlc3MuZW52Lk5FWFRfUFVCTElDX0FQSV9VSUQsXG4vLyAgICAgY2xpZW50X3NlY3JldDogcHJvY2Vzcy5lbnYuTkVYVF9QVUJMSUNfQVBJX1NFQ1JFVCxcbi8vICAgICBjb2RlOiBjb2RlLFxuLy8gICAgIHJlZGlyZWN0X3VyaTogcHJvY2Vzcy5lbnYuTkVYVF9QVUJMSUNfUkVESVJFQ1RfVVJJLFxuLy8gICB9KTtcbi8vICAgcmV0dXJuIGRhdGE7XG4vLyB9XG5cbmV4cG9ydCBhc3luYyBmdW5jdGlvbiBjaGVja0lmTG9nZ2VkSW4ocm91dGVyOiBOZXh0Um91dGVyKTogUHJvbWlzZTxib29sZWFuPiB7XG4gIGNvbnN0IHRva2VuID0gQ29va2llcy5nZXQoJ2FjY2Vzc1Rva2VuJyk7XG5cbiAgaWYgKHRva2VuKSB7XG4gICAgdHJ5IHtcbiAgICAgIGNvbnN0IHJlc3BvbnNlID0gYXdhaXQgYXhpb3MuZ2V0KFxuICAgICAgICBcImh0dHBzOi8vYXBpLmludHJhLjQyLmZyL3YyL21lXCIsXG4gICAgICAgIHtcbiAgICAgICAgICBoZWFkZXJzOiB7XG4gICAgICAgICAgICBBdXRob3JpemF0aW9uOiBgQmVhcmVyICR7dG9rZW59YCxcbiAgICAgICAgICB9LFxuICAgICAgICB9XG4gICAgICApO1xuICAgICAgaWYgKHJlc3BvbnNlLnN0YXR1cyA+PSA0MDApIHtcbiAgICAgICAgdGhyb3cgbmV3IEVycm9yKFwiTm90IEF1dGhvcml6ZWRcIik7XG4gICAgICB9XG4gICAgICByZXR1cm4gdHJ1ZTtcbiAgICB9IGNhdGNoIChlcnJvcikge1xuICAgICAgcmV0dXJuIGZhbHNlO1xuICAgIH1cbiAgfSBlbHNlIHtcbiAgICByZXR1cm4gZmFsc2U7XG4gIH1cbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGxvZ091dChyb3V0ZXI6IE5leHRSb3V0ZXIpIHtcbiAgQ29va2llcy5zZXQoJ2FjY2Vzc1Rva2VuJywgJycsIHsgZXhwaXJlczogMH0gKTtcbiAgcm91dGVyLnB1c2goJy9sb2dpbicpO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gZ29NYWluUGFnZShyb3V0ZXI6IE5leHRSb3V0ZXIpIHtcbiAgcm91dGVyLnB1c2goTUFJTl9QQUdFKTtcbn1cblxuZXhwb3J0IGNvbnN0IGdldE5pY2tuYW1lRnJvbVRva2VuID0gYXN5bmMgKCkgPT4ge1xuICBjb25zdCBhY2Nlc3NUb2tlbiA9IENvb2tpZXMuZ2V0KCdhY2Nlc3NUb2tlbicpO1xuICB0cnkge1xuICAgIGNvbnN0IHJlc3BvbnNlID0gYXdhaXQgYXhpb3MuZ2V0KFwiaHR0cHM6Ly9hcGkuaW50cmEuNDIuZnIvdjIvbWVcIiwge1xuICAgICAgaGVhZGVyczoge1xuICAgICAgICBBdXRob3JpemF0aW9uOiBgQmVhcmVyICR7YWNjZXNzVG9rZW59YCxcbiAgICAgIH0sXG4gICAgfSk7XG4gICAgcmV0dXJuIHJlc3BvbnNlLmRhdGEubG9naW47XG4gIH0gY2F0Y2ggKGVycm9yKSB7XG4gICAgY29uc29sZS5lcnJvcihlcnJvcik7XG4gICAgcmV0dXJuIG51bGw7XG4gIH1cbn07XG5cbmV4cG9ydCBmdW5jdGlvbiBnZXROaWNrbmFtZSgpIHtcbiAgY29uc3QgW25pY2tuYW1lLCBzZXROaWNrbmFtZV0gPSB1c2VSZWNvaWxTdGF0ZShuaWNrbmFtZVN0YXRlKTtcbiAgdXNlRWZmZWN0KCgpPT57XG4gICAgZ2V0Tmlja25hbWVGcm9tVG9rZW4oKS50aGVuKChuaWNrbmFtZSkgPT4ge1xuICAgICAgc2V0Tmlja25hbWUobmlja25hbWUpO1xuICAgICB9KVxuICB9LFtdKVxuXG4gIHJldHVybiBuaWNrbmFtZTtcbn0iXSwibmFtZXMiOlsiQ29va2llcyIsImF4aW9zIiwidXNlUmVjb2lsU3RhdGUiLCJ1c2VFZmZlY3QiLCJuaWNrbmFtZVN0YXRlIiwiTUFJTl9QQUdFIiwiY2hlY2tJZkxvZ2dlZEluIiwicm91dGVyIiwidG9rZW4iLCJnZXQiLCJyZXNwb25zZSIsImhlYWRlcnMiLCJBdXRob3JpemF0aW9uIiwic3RhdHVzIiwiRXJyb3IiLCJlcnJvciIsImxvZ091dCIsInNldCIsImV4cGlyZXMiLCJwdXNoIiwiZ29NYWluUGFnZSIsImdldE5pY2tuYW1lRnJvbVRva2VuIiwiYWNjZXNzVG9rZW4iLCJkYXRhIiwibG9naW4iLCJjb25zb2xlIiwiZ2V0Tmlja25hbWUiLCJuaWNrbmFtZSIsInNldE5pY2tuYW1lIiwidGhlbiJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./utils/utils.ts\n");

/***/ }),

/***/ "next/router":
/*!******************************!*\
  !*** external "next/router" ***!
  \******************************/
/***/ ((module) => {

module.exports = require("next/router");

/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "react" ***!
  \************************/
/***/ ((module) => {

module.exports = require("react");

/***/ }),

/***/ "react/jsx-dev-runtime":
/*!****************************************!*\
  !*** external "react/jsx-dev-runtime" ***!
  \****************************************/
/***/ ((module) => {

module.exports = require("react/jsx-dev-runtime");

/***/ }),

/***/ "recoil":
/*!*************************!*\
  !*** external "recoil" ***!
  \*************************/
/***/ ((module) => {

module.exports = require("recoil");

/***/ }),

/***/ "axios":
/*!************************!*\
  !*** external "axios" ***!
  \************************/
/***/ ((module) => {

module.exports = import("axios");;

/***/ }),

/***/ "js-cookie":
/*!****************************!*\
  !*** external "js-cookie" ***!
  \****************************/
/***/ ((module) => {

module.exports = import("js-cookie");;

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = (__webpack_exec__("./pages/login.tsx"));
module.exports = __webpack_exports__;

})();