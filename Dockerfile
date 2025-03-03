# 1. 베이스 이미지 설정 (Node.js 18 버전 사용)
FROM node:18-alpine AS builder

# 2. 작업 디렉토리 설정
WORKDIR /app

# 3. package.json과 package-lock.json을 복사
COPY package.json package-lock.json ./

# 4. 의존성 설치 (production 모드)
RUN npm install

# 5. Next.js 빌드 파일 복사
COPY . .

# 6. Next.js 빌드 실행
RUN npm run build

# ======================== #
# 배포용 컨테이너 생성 (멀티 스테이지 빌드)
FROM node:18-alpine AS runner

# 7. 실행 환경 설정
WORKDIR /app

# 8. 빌드 결과 및 node_modules만 복사
COPY --from=builder /app/node_modules ./node_modules
COPY --from=builder /app/.next ./.next
COPY --from=builder /app/public ./public
COPY --from=builder /app/package.json ./

# 9. Next.js 실행 포트 설정
EXPOSE 3000

# 10. Next.js 서버 실행
CMD ["npm", "run", "start"]
